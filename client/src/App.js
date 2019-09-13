import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Success from "./components/bikeRentals/Success";
import BikeRentalsState from "./context/bikeRentals/bikeRentalsState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BikeRentalsState>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/success" component={Success} />
        </Switch>
      </Router>
    </BikeRentalsState>
  );
}

export default App;
