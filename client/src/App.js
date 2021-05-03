import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './pages/Home/HomePage';
import UserPage from './pages/User/UserPage';

function App() {

  return (
    <Router>
      <Switch>
          <Route path="/about">
            <p>about page</p>
          </Route>
          <Route path="/users">
            <UserPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
