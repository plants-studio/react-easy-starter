import React from "react";

// 화살표 함수
const InlineStyle = () => {
  const name = "코로나 박멸 기원";
  const style = {
    backgroundColor: "black", // 카멜 표기법 사용 background-color -> backgroundColor
    color: "red",
    fontSize: "48px", // font-size -> fontSize
    fontWeight: "bold", // font-weight -> fontWeight
    padding: 16, // 단위 생략시 px로 적용
  };
  return <div style={style}>{name}</div>;
};

export default InlineStyle;
