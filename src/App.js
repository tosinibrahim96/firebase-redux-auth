import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/signup" component={Signup} />
        {/* <Route
          path="/signIn"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <AuthPage />
          }
        /> */}
      </Switch>
    </div>
  );
}

export default App;
