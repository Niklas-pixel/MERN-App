import React from "react";
import Home from "./pages/Home";
import { Link, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div>
      <Link to="/">Home</Link>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
