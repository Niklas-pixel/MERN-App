import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Button({ className, text }) {
  return (
    <div className={className}>
      <Link to="/signin">
        <button>{text}</button>
      </Link>
    </div>
  );
}

export default styled(Button)`
  button {
    padding: 0.5rem 1.5rem;
    background-image: linear-gradient(45deg, #fcd691, #ff7c7c);
    position: absolute;
    left: 20px;
    top: 420px;
    border: none;
    color: white;
    border-radius: 50px;
  }
`;
