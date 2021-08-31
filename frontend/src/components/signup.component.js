import React, { useState } from "react";
import { postServices } from "../api/ApiServices";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    let data = {
      url: "http://localhost:5000/api/v1/signUp",
      params: {
        firstName,
        lastName,
        email,
        password,
      },
    };
    let res = await postServices(data);
    console.log(res)
    if (res.status === 200 || res.status === 201) {
      alert("Sign Up Success! Login with same credentials");
    } else {
      alert("Sign Up failed");
    }
  };

  return (
    <form>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block" onClick={signUp}>
        Sign Up
      </button>
    </form>
  );
}
