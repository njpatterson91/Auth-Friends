import React from "react";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </header>
    </Router>
  );
}

export default App;
