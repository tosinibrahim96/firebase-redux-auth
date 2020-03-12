import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </div>
  );
}

export default App;
