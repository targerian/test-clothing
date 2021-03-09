import React from "react";
import { signInWithGoogle } from "../../firebase/firebase.util.js";
import CustomButton from "../button-component/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSignWithGoogle =async ()=> {
    try{await signInWithGoogle()}
    catch (ex) {console.log(ex)}
  }
  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span className="title">Sign in with your email and password</span>
        <form noValidate onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="name"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
          <CustomButton type="submit" value="Submit Form"> Sign in </CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> Google Sign in</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
