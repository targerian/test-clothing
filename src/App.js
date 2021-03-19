import React from "react";
import "./App.css";
import HomePage from "../src/pages/homepage/homepage.component.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop.component";
import Header from "./components/header-component/header.component";
import SignInAndSignUp from "./pages/signin-and-signup/signin-and-signup.component";
import { auth, CreateUserProfileDocument } from "./firebase/firebase.util";
import { setCurrentUser } from "./redux/user/user.action";
import { connect } from "react-redux";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(props) {
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
      } else {
        setCurrentUser(userAuth);
      }
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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
