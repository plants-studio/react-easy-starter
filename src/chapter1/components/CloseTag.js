import React from "react";

// 화살표 함수
const CloseTag = () => {
  return (
    <div>
      <h3>input 태그도 닫아주세요!</h3>
      <input type="number" placeholder="숫자를 입력하세요"></input>
      <h3>self-closing tag </h3>
      <input type="number" placeholder="숫자를 입력하세요" />
      <h1>두개의 input은 같은 input입니다.</h1>
    </div>
  );
};

export default CloseTag;
