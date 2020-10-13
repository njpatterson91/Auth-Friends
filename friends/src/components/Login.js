import React, { useState } from "react";
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

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit="">
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
      </form>
    </div>
  );
}
