import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import HomePage from "../src/pages/homepage/homepage.component.jsx";

import "./App.css";

import { auth, CreateUserProfileDocument } from "./firebase/firebase.util";
import Header from "./components/header-component/header.component";
import CheckoutPage from "./pages/checkoutpage/checkoutpage.component";
import ShopPage from "./pages/shoppage/shop.component";
import SignInAndSignUp from "./pages/signin-and-signup/signin-and-signup.component";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";
import Footer from "./components/footer/footer.component.jsx";
import ContactPage from "./pages/contact/contact.component.jsx";
import { createStructuredSelector } from "reselect";
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const userRef = await CreateUserProfileDocument(userAuth);
      if (userAuth) {
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/contact" component={ContactPage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/sign"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
