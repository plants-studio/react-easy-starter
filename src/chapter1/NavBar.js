import React, { useState, useEffect } from "react";
import Link from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [selected, setSelected] = useState("comment");

  return (
    <div>
      <ul id="menu">
        <li
          onMouseOver={() => {
            setSelected("wrapped");
          }}
        >
          Wrapped Element
        </li>
        <li
          onMouseOver={() => {
            setSelected("expression");
          }}
        >
          JS Expression
        </li>
        <li
          onMouseOver={() => {
            setSelected("ternary");
          }}
        >
          Ternary Operator
        </li>
        <li
          onMouseOver={() => {
            setSelected("and");
          }}
        >
          And Operator
        </li>
        <li
          onMouseOver={() => {
            setSelected("style");
          }}
        >
          Inline Style
        </li>
        <li
          onMouseOver={() => {
            setSelected("class");
          }}
        >
          ClassName
        </li>
        <li
          onMouseOver={() => {
            setSelected("tag");
          }}
        >
          Close Tag
        </li>
        <li
          onMouseOver={() => {
            setSelected("comment");
          }}
        >
          Comment
        </li>
        <li className={selected}></li>
      </ul>
    </div>
  );
};

export default NavBar;
