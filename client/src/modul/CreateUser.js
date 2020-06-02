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
  .password,
  .name,
  .email {
    display: block;
    width: 10rem;

    @media ${device.laptop} {
      width: 30rem;
    }
  }
`;
