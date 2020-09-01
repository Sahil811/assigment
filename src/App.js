import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import DashBoard from "./containers/DashBoard";
import LoginPage from "./containers/LoginPage";
import SignupPage from "./containers/SignupPage";
import ResetPasswordPage from "./containers/ResetPasswordPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/signup" component={SignupPage}></Route>
            <Route path="/resetpassword" component={ResetPasswordPage}></Route>
            <Route path="/dashboard" component={DashBoard}></Route>
            <Route path="/" component={LoginPage}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
