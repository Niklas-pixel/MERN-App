import React from "react";
import CreateUser from "../components/CreateUser";
import SignInUser from "../components/SignInUser";
import styled from "styled-components";
function SignIn({ className }) {
  return (
    <div className={className}>
      <SignInUser />
      <CreateUser />
    </div>
  );
}

export default styled(SignIn)`
  background-color: #f4f4f4;
  min-height: 100vh;
`;
