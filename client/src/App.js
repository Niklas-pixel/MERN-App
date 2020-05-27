import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [apiResponse, setApiResponse] = useState();

  const callApi = () => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <p>{apiResponse}</p>
    </div>
  );
}

export default App;
