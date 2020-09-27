import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Chapter1 from "./chapter1/Chapter1";
import NavBar from "./chapter1/NavBar";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chapter1" component={Chapter1} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
