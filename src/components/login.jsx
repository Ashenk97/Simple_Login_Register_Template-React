import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="customCheck1"
            />
            <label className="form-check-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
        <p className="forgot-password text-end">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
  }
}
