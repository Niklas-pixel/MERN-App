import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const axios = require("axios");
const Context = React.createContext();

function ContextProvider({ children }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Upload image
  const [selectedFile, setSelectedFile] = useState(null);
  const [loaded, setLoaded] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:9000/users/login", {
        email: email,
        password: password,
      })
      .then(() => {
        setIsLoggedIn(true);
      })

      .catch((err) => {
        console.error(err);
        alert("Error logging in, please try again");
      });
  };

  const nameInput = (e) => {
    setName(e.target.value);
  };

  const emailInput = (e) => {
    setEmail(e.target.value);
  };

  const passwordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/users", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => console.log(res.data))
      .catch((e) => setError(e));
  };

  // Upload image

  const onChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setLoaded(0);
  };

  const onClickHandler = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", selectedFile);
    axios
      .post("http://localhost:9000/recipe/upload/image", data)
      .then((res) => {
        console.log(res.statusText);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Context.Provider
      value={{
        name,
        email,
        password,
        error,
        nameInput,
        emailInput,
        passwordInput,
        handleCreateUser,
        handleLogin,
        isLoggedIn,
        onClickHandler,
        onChangeHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
