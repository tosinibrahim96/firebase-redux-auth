import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, auth } from "../firebase/firebase.util";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLoginSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log("Login Successful");
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error("Error", error.message);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <p>SIGN IN</p>
        <h2 className="title">Already have an account?</h2>
        <span>Sign in with your e-mail and password </span>

        <form onSubmit={this.handleLoginSubmit}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            label="email"
            required
          />

          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            label="password"
            required
          />
          <div className="buttons">
            <button type="submit">Sign-In</button>
            <button onClick={signInWithGoogle} isgoogle="true">
              Sign in with Google
            </button>

            <Link to="/signup">
              <button>Sign-Up</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
