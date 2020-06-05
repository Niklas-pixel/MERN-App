import React from "react";
import styled from "styled-components";

function RoundButton({ className }) {
  return (
    <div className={className}>
      <button>
        <div className="ham1"></div>
        <div className="ham2"></div>
        <div className="ham3"></div>
      </button>
    </div>
  );
}

export default styled(RoundButton)`
  button {
    padding: 1rem 1rem;
    background-color: #f56969;
    position: absolute;
    right: 20px;
    bottom: 20px;
    border: none;
    border-radius: 100px;
  }

  .ham1,
  .ham2,
  .ham3 {
    width: 15px;
    height: 3px;
    background-color: #ffffff;
    margin: 3px;
  }
`;
