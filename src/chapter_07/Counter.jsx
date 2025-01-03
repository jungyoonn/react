import React, { Component } from 'react';
import { useState } from 'react';

function Counter(props) {
  // var count = 0;
  // 버튼 3종 : 1 증가, 1 감소, 초기화
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> 총 {count}번 클릭했습니다</p>
      <button onClick={() => {
        setCount(count + 1);
        console.log(count);
      }
      }>
        더하기
      </button>
      <button onClick={() => {
        setCount(count - 1);
      }}>
        빼기
      </button>
      <button onClick={() => {
        setCount(0);
      }}>
        초기화
      </button>
    </div>
  );
}

export default Counter;
