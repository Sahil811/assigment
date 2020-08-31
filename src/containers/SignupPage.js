import React from "react";
import "./LoginPage.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

class SingupLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contact: "",
      dateOfBirth: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleChangeDate = (value) => {
    this.setState({ dateOfBirth: value });
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { email, password, contact, dateOfBirth, name } = this.state;
    return (
      <div className="LoginPage">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label className="label">Name: </label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              value={name}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-container">
            <label className="label">Email: </label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="you@email.com"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-container">
            <label className="label">Contact: </label>
            <input
              type="text"
              name="contact"
              className="input"
              placeholder=""
              value={contact}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-container">
            <label className="label">Date of Birth: </label>
            <DatePicker
              selected={dateOfBirth}
              isClearable
              showYearDropdown
              scrollableYearDropdown
              maxDate={new Date()}
              name="dateOfBirth"
              onChange={(value) => this.handleChangeDate(value)}
              className="input"
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
          </div>
          <button type="submit" id="login-btn">
            Sign up
          </button>
        </form>
        <p className="signup-label">
          Already Have an account?{" "}
          <Link to="/login" className="link">
            Sign in
          </Link>
        </p>
      </div>
    );
  }
}

export default SingupLogin;
