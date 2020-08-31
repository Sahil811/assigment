import React from "react";
import DashBoard from "./containers/DashBoard";
import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/singup" component={SignupPage}></Route>
          <Route path="/" component={DashBoard}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
