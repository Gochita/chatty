import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";
import alertifyjs from "alertifyjs"

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: " " });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      alertifyjs.error('Login obligatorio')
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }
  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div>
        <form
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <center>
          <h1>
            Login to 
            <Link to="/">
                 Chatty
            </Link>
          </h1>
          <p>
            Ingresa 
          </p>
          <div>
            <input
              placeholder="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div>
            <input
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          <div>
            {this.state.error ? (
              <p>{this.state.error}</p>
            ) : null}
            <button type="submit" className="btn btn-dark">Login</button>
          </div>
          <hr />
          <p>
            No tienes cuenta? <Link to="/signup">Sign up</Link>
          </p>
          <button className= "btn btn-success" onClick={this.googleSignIn} type="button">
            entra con Google
          </button>
          <button className="btn btn-secondary" type="button" onClick={this.githubSignIn}>
            Entra con GitHub
          </button>
          </center>
          
        </form>
      </div>
    );
  }
}
