import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Chapter1 from "./chapter1/Chapter1";

function App() {
  return (
    <Router>
      <header className="App-header">상단 헤더입니다</header>
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
