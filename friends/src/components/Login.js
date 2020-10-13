import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const initialLogin = {
  username: "",
  password: "",
};
export default function Login(props) {
  const [loginDetails, setLoginDetails] = useState(initialLogin);

  const onChangeHandler = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };
  let history = useHistory();
  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", loginDetails)
      .then((res) => {
        console.log("test");
        window.localStorage.setItem("authorization", res.data.payload);
        history.push("/friends");
      })
      .catch((err) => {
        history.push("/login");
        setLoginDetails(initialLogin);
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          onChange={onChangeHandler}
          value={loginDetails["username"]}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={onChangeHandler}
          value={loginDetails["password"]}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
