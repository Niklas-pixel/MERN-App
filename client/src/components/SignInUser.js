import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";

function SignInUser({ className }) {
  const { error, handleLogin, passwordInput, emailInput } = useContext(Context);

  return (
    <div className={className}>
      <h2>Sign in</h2>
      <form onSubmit={handleLogin}>
        <input
          onChange={emailInput}
          className="email"
          type="text"
          placeholder="Email"
        />
        <input
          onChange={passwordInput}
          className="password"
          type="text"
          placeholder="Password"
        />
        <button>continue</button>
      </form>
      {error ? "login failed" : ""}
    </div>
  );
}

export default styled(SignInUser)`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  form {
    width: 80%;
  }

  .email,
  .password {
    display: block;
    width: 100%;
    margin: 0 0 1rem 0;
  }
  button {
    width: 100%;
  }
`;
