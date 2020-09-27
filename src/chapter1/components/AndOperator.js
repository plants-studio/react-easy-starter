import React from "react";

// 화살표 함수
const AndOperator = () => {
  const name = "리액트"; // 값을 바꿔 어떤 상황이 일어나는지 알아보세요!
  return <div>{name === "리액트" && <h1>리액트입니다.</h1>}</div>;
};

export default AndOperator;
