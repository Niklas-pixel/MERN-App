import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import CreateUser from "./modul/CreateUser";

const axios = require("axios");

function App() {
  const [apiResponse, setApiResponse] = useState();
  const [dishname, setDishname] = useState();
  const [database, setDatabase] = useState([]);

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

  const getDatabase = async () => {
    await axios
      .get("http://localhost:9000/recipes")
      .then((res) => setDatabase(res.data));
  };

  const recipes = database.map((recipe) => (
    <h1 key={recipe._id}>{recipe.dishname}</h1>
  ));

  return (
    <div>
      <p>{apiResponse}</p>
      <form onSubmit={(event) => postRecipe(event)}>
        <input onChange={handleDishname} type="text" placeholder="add in" />
      </form>
      <button onClick={getDatabase}>GET SOME RECIPE</button>
      {recipes}

      <CreateUser />
    </div>
  );
}

export default App;
