import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [hoveredNumber, setHoveredNumber] = useState(1),
    [previousNumber, setPreviousNumber] = useState(),
    [left, setLeft] = useState(10),
    [width, setWidth] = useState(142.422);

  const wrappedLinkRef = useRef(),
    expressionLinkRef = useRef(),
    ternaryLinkRef = useRef(),
    andLinkRef = useRef(),
    styleLinkRef = useRef(),
    classLinkRef = useRef(),
    tagLinkRef = useRef(),
    commentLinkRef = useRef();

  const refList = [
    wrappedLinkRef,
    expressionLinkRef,
    ternaryLinkRef,
    andLinkRef,
    styleLinkRef,
    classLinkRef,
    tagLinkRef,
    commentLinkRef,
  ];

  const style = {
    width: width,
    left: left,
  };

  const getWidth = (hoveredNumber) => {
    setWidth(refList[hoveredNumber - 1].current.offsetWidth - 18);
  };

  const getLeft = (previousNumber, hoveredNumber) => {
    let temp = 0;
    if (previousNumber < hoveredNumber) {
      for (let i = previousNumber; i < hoveredNumber; i++)
        temp += refList[i - 1].current.offsetWidth;
      setLeft(left + temp);
    } else if (previousNumber > hoveredNumber) {
      for (let i = previousNumber - 1; i >= hoveredNumber; i--)
        temp += refList[i - 1].current.offsetWidth;
      setLeft(left - temp);
    }
  };

  return (
    <div>
      <div>
        <ul id="menu">
          <li
            onMouseOver={() => {
              setPreviousNumber(hoveredNumber);
              setHoveredNumber(1);
              getWidth(hoveredNumber);
              getLeft(previousNumber, hoveredNumber);
            }}
            ref={wrappedLinkRef}
          >
            <Link className="link" to="/chapter1/wrapped">
              Wrapped Element
            </Link>
          </li>
          <li
            onMouseOver={() => {
              setPreviousNumber(hoveredNumber);
              setHoveredNumber(2);
              getWidth(hoveredNumber);
              getLeft(previousNumber, hoveredNumber);
            }}
            ref={expressionLinkRef}
          >
            <Link className="link" to="/chapter1/expression">
              JS Expression
            </Link>
          </li>
          <li
            onMouseOver={() => {
              setPreviousNumber(hoveredNumber);
              setHoveredNumber(3);
              getWidth(hoveredNumber);
              getLeft(previousNumber, hoveredNumber);
            }}
            ref={ternaryLinkRef}
          >
            <Link className="link" to="/chapter1/ternary">
              Ternary Operator
            </Link>
          </li>
          <li
            onMouseOver={() => {
              setPreviousNumber(hoveredNumber);
              setHoveredNumber(4);
              getWidth(hoveredNumber);
              getLeft(previousNumber, hoveredNumber);
            }}
            ref={andLinkRef}
          >
            <Link className="link" to="/chapter1/and">
              And Operator
            </Link>
          </li>
          <li
            onMouseOver={() => {
              setPreviousNumber(hoveredNumber);
              setHoveredNumber(5);
              getWidth(hoveredNumber);
              getLeft(previousNumber, hoveredNumber);
            }}
            ref={styleLinkRef}
          >
            <Link className="link" to="/chapter1/style">
              Inline Style
            </Link>
          </li>
          <li
            onMouseOver={() => {
              setPreviousNumber(hoveredNumber);
              setHoveredNumber(6);
              getWidth(hoveredNumber);
              getLeft(previousNumber, hoveredNumber);
            }}
            ref={classLinkRef}
          >
            <Link className="link" to="/chapter1/class">
              ClassName
            </Link>
          </li>
          <li
            onMouseOver={() => {
              setPreviousNumber(hoveredNumber);
              setHoveredNumber(7);
              getWidth(hoveredNumber);
              getLeft(previousNumber, hoveredNumber);
            }}
            ref={tagLinkRef}
          >
            <Link className="link" to="/chapter1/tag">
              Close Tag
            </Link>
          </li>
          <li
            onMouseOver={() => {
              setPreviousNumber(hoveredNumber);
              setHoveredNumber(8);
              getWidth(hoveredNumber);
              getLeft(previousNumber, hoveredNumber);
            }}
            ref={commentLinkRef}
          >
            <Link className="link" to="/chapter1/comment">
              Comment
            </Link>
          </li>
          <li style={style}></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
