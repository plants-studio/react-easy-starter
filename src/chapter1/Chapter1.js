import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import WrappedElement from "./components/WrappedElement";
import NotFound from "./../NotFound";

function App() {
  return (
    <>
      <h1>챕터 1</h1>
      <Route exact paht="/jj" component={WrappedElement} />
    </>
  );
}

export default App;
