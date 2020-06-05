import React, { useState } from "react";

const axios = require("axios");
const Context = React.createContext();

function ContextProvider({ children }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:9000/users/login", {
        email: email,
        password: password,
      })
      .then((res) => console.log(res.data))
      .then(() => setIsLoggedIn(true))
      .catch((e) => setError(e));
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
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
