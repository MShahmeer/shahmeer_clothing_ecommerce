import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth,signInWithGoogle } from "../../Firebase/FirebaseUtils";

import "./SignInStyles.scss";
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const{email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }

  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
