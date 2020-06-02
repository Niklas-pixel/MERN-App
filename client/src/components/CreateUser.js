import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import { device } from "../utils/utils";

function CreateUser({ className }) {
  const {
    error,
    nameInput,
    emailInput,
    passwordInput,
    handleCreateUser,
  } = useContext(Context);

  return (
    <div className={className}>
      <h2>Create account</h2>
      <form onSubmit={(e) => handleCreateUser(e)}>
        <input
          className="name"
          onChange={nameInput}
          type="text"
          placeholder="Name"
        />
        <input
          className="email"
          onChange={emailInput}
          type="text"
          placeholder="Email"
        />
        {error ? <p>email is invalid</p> : ""}
        <input
          className="password"
          onChange={passwordInput}
          type="text"
          placeholder="Password"
        />
        <button>create user</button>
      </form>
    </div>
  );
}

export default styled(CreateUser)`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  form {
    width: 80%;
  }
  .password,
  .name,
  .email {
    display: block;
    width: 100%;
    margin: 0 0 1rem 0;
  }
  button {
    width: 100%;
  }
`;

// @media ${device.laptop} {
//   width: 30rem;
// }
