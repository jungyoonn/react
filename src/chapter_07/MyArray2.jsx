import React from 'react';
import { useState } from 'react';

const MyArray2 = () => {
  const fruits = ['사과', '딸기', '포도', '복숭아', '귤'];
  const [bucket, setBucket] = useState([]);
  const [count, setCount] = useState([0, 0, 0, 0, 0]);
  return (
    <div>
      <h3>{bucket}</h3>
      <button onClick={() => {
        const rand = (Math.floor)(Math.random() * fruits.length);
        count[rand] += 1;
        setCount(count[rand]);
        }}>과일 추가</button>
      <button onClick={() => {
        const rand = (Math.floor)(Math.random() * fruits.length);
        if(count[rand] > 0){
          setCount(count[rand] - 1);
        } else {
          console.log("0개에서 제거할 수 없습니다")
        }
      }}>과일 빼기</button>
      <button onClick={() => setBucket([])}>바구니 비우기</button>
      <ul>
        {fruits.map((f, i) => <li key={i}>{f} {count[i]}개</li>)}
      </ul>
    </div>
  );
}

export default MyArray2;
