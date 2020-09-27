import React from "react";

// 화살표 함수
const WrappedElement = () => {
  return (
    <div>
      <h1>첫번째 요소(element)</h1>
      <h2>두번째 요소</h2>
    </div>
  );
};

/* 화살표 함수가 아닌 function 키워드로도 가능
function WrappedElement() {
    return (
        <h1>리액트 안녕</h1>
    )
}

*/

export default WrappedElement;
