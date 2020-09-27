import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [selected, setSelected] = useState("wrapped");

  return (
    <div>
      <ul id="menu">
        <li
          onMouseOver={() => {
            setSelected("wrapped");
          }}
        >
          <Link className="link" to="/chapter1/wrapped">
            Wrapped Element
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setSelected("expression");
          }}
        >
          <Link className="link" to="/chapter1/expression">
            JS Expression
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setSelected("ternary");
          }}
        >
          <Link className="link" to="/chapter1/ternary">
            Ternary Operator
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setSelected("and");
          }}
        >
          <Link className="link" to="/chapter1/and">
            And Operator
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setSelected("style");
          }}
        >
          <Link className="link" to="/chapter1/style">
            Inline Style
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setSelected("class");
          }}
        >
          <Link className="link" to="/chapter1/class">
            ClassName
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setSelected("tag");
          }}
        >
          <Link className="link" to="/chapter1/tag">
            Close Tag
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setSelected("comment");
          }}
        >
          <Link className="link" to="/chapter1/comment">
            Comment
          </Link>
        </li>
        <li className={selected}></li>
      </ul>
    </div>
  );
};

export default NavBar;
