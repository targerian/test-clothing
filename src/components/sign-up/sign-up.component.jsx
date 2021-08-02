import React from "react";
import CustomButton from "../button-component/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";
import {
  auth,
  CreateUserProfileDocument,
} from "../../firebase/firebase.util.js";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match, please retry");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await user.updateProfile({
        displayName: displayName
    })
      await CreateUserProfileDocument(user,  {displayName} );
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
      alert('account created successfully!')
    } catch (err) {
      console.log(err);
    }
  };
  handleChange = (e) =>{
      const{ name, value} = e.target;
      console.log(e.target)
      this.setState({[name]: value})
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="title">I don't have an account</h1>
        <span className="title">Sign up with your Email and Password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit" value="submit Form">
            Sign Up
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
