import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="LoginPage">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label className="label">Email: </label>
            <input
              type="email"
              name="Email"
              className="input"
              placeholder="you@email.com"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-container">
            <label className="label">Password: </label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
            <a href="/" className="link forgotten-password">
              Forgot password?
            </a>
          </div>
          <button type="submit" id="login-btn">
            Login
          </button>
        </form>
        <p className="signup-label">
          Don't have an account?{" "}
          <Link to="/singup" className="link">
            Sign up
          </Link>
        </p>
      </div>
    );
  }
}

export default LoginPage;
