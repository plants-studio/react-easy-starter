import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import WrappedElement from "./components/WrappedElement";
import JSExpression from "./components/JSExpression";
import TernaryOperator from "./components/TernaryOperator";
import AndOperator from "./components/AndOperator";
import InlineStyle from "./components/InlineStyle";
import ClassName from "./components/ClassName";
import CloseTag from "./components/CloseTag";
import Comment from "./components/Comment";
import NotFound from "./../NotFound";

function App() {
  return (
    <>
      <h1>챕터 1</h1>
      <Switch>
        <Route exact path="/chapter1/wrapper" component={WrappedElement} />
        <Route exact path="/chapter1/expression" component={JSExpression} />
        <Route exact path="/chapter1/ternary" component={TernaryOperator} />
        <Route exact path="/chapter1/and" component={AndOperator} />
        <Route exact path="/chapter1/style" component={InlineStyle} />
        <Route exact path="/chapter1/class" component={ClassName} />
        <Route exact path="/chapter1/tag" component={CloseTag} />
        <Route exact path="/chapter1/comment" component={Comment} />
      </Switch>
    </>
  );
}

export default App;
