import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
const axios = require("axios");
{
  test;
}
function CreateUser({ className }) {
  const {
    name,
    email,
    password,
    error,
    nameInput,
    emailInput,
    passwordInput,
    handleCreateUser,
  } = useContext(Context);

  return (
    <div className={className}>
      <form onSubmit={(e) => handleCreateUser(e)}>
        <input onChange={nameInput} type="text" placeholder="Name" />
        <input onChange={emailInput} type="text" placeholder="Email" />
        {error ? <p>email is invalid</p> : ""}
        <input onChange={passwordInput} type="text" placeholder="Password" />
        <button>create user</button>
      </form>
    </div>
  );
}

export default styled(CreateUser)``;
