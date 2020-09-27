import React from "react";

// 화살표 함수
const Comment = () => {
  // JSX 외의 주석은 이렇게 사용하거나
  /* 여러 줄인 경우
    이렇게 사용합니다. */
  return (
    <div>
      <h1>주석 테스트</h1>
      {/* JSX 내의 주석은 이렇게 사용합니다. */}
      // JSX 내에서 이런 것은 안됩니다(1) /* JSX 내에서 이런 것은 안됩니다(2) */
    </div>
  );
};

export default Comment;
