import React, { useContext } from "react";
import Home from "./pages/Home";
import { Link, Switch, Route, Redirect, useHistory } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Platform from "./pages/Platform";
import { Context } from "./context/Context";

function App() {
  const { isLoggedIn } = useContext(Context);
  const history = useHistory();
  console.log(isLoggedIn);
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/platform">Private</Link>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/platform">
          {isLoggedIn ? history.push("/platform") : <Redirect to="/signin" />}
          <Platform />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
