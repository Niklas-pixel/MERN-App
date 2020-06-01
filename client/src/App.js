import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const axios = require("axios");

function App() {
  const [apiResponse, setApiResponse] = useState();
  const [dishname, setDishname] = useState();

  const callApi = () => {
    fetch("http://localhost:9000/")
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };

  useEffect(() => {
    callApi();
  }, []);

  const handleDishname = (e) => {
    setDishname(e.target.value);
  };

  const postRecipe = (event) => {
    event.preventDefault();
    console.log(dishname);
    axios
      .post("http://localhost:9000/recipes", {
        dishname: dishname,
      })
      .then((recipe) => {
        console.log(recipe);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <p>{apiResponse}</p>

      <form onSubmit={(event) => postRecipe(event)}>
        <input onChange={handleDishname} type="text" placeholder="add in" />
      </form>
    </div>
  );
}

export default App;
