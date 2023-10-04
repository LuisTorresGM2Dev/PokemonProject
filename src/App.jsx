import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "./Card.jsx";
import MoreInfo from "./mainContext.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Card} />
        <Route path="/moreinfo/:pokemonId" component={MoreInfo} />
      </Switch>
    </Router>
  );
}

export default App;
