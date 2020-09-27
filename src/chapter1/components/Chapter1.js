import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import WrappedElement from "./";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route paht="/" component={NotFound} />
        <Route paht="/wrappedelement" component={WrappedElement} />
        <Route path="*" component={NotFound} />
      </Switch>
      \
    </>
  );
}

export default App;
