import React, { useState } from "react";
import { postServices } from "../api/ApiServices";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    let data = {
      url: "http://localhost:5000/api/v1/login",
      params: {
        email: email,
        password: password,
      },
    };
    let res = await postServices(data);
    if (res.status === 200) {
      history.push("/users");
      console.log(res.data);
    } else {
      alert("Login failed");
    }
  };

  return (
    <form>
      <h3>Sign In</h3>

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

      <button type="submit" className="btn btn-primary btn-block" onClick={login}>
        Sign In
      </button>
    </form>
  );
}
