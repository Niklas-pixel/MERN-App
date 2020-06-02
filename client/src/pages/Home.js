import React from "react";
import styled from "styled-components";
import img from "../utils/images/mobilebg.png";
import Button from "../components/globals/Button";
import RoundButton from "../components/globals/RoundButton";

function Home({ children, className }) {
  return (
    <div className={className}>
      <h1>
        Share your <br /> own recipes <br /> with the world
      </h1>
      <p>
        Upload your recipes <br /> Follow your favorites
        <br />
        Get inspired{" "}
      </p>
      <Button text="continue" />
      <RoundButton />
    </div>
  );
}

export default styled(Home)`
  position: relative;
  min-height: 100vh;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    position: absolute;
    left: 20px;
    top: 200px;
    color: #f56969;
  }
  p {
    position: absolute;
    left: 20px;
    top: 330px;
    color: #f56969;
  }
`;
