import React from "react";
import "./App.css";
import HomePage from "../src/pages/homepage/homepage.component.jsx";
import { Route, Link, Switch } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop.component";
import Header from "./components/header-component/header.component";
import SignInAndSignUp from "./pages/signin-and-signup/signin-and-signup.component";
import { auth, CreateUserProfileDocument } from "./firebase/firebase.util";
import { setCurrentUser } from "./redux/user/user.action";
import { connect } from "react-redux";
const Test = (props) => {
  console.log(props);
  return (
    <div>
      <h1>this is a test page</h1>
      <Link to={`${props.match.url}/13`}>to topic 13</Link>
      <Link to={`${props.match.url}/17`}>to topic 17][</Link>
    </div>
  );
};

const TestId = (props) => {
  console.log(props);
  return (
    <div>
      <h1>this is a test id and the id is {props.match.params.testid} </h1>
      <button onClick={() => props.history.push("/test")}>to test</button>
    </div>
  );
};

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
            }
          );
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
          <Route exact path="/test" component={Test} />
          <Route exact path="/test/:testid" component={TestId} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
