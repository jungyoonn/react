import React from 'react';
import { useState } from 'react';

const MyArray = () => {
  const fruits = ['사과', '딸기', '포도', '복숭아', '귤'];
  const [bucket, setBucket] = useState([]);

  return (
    <div>
      <h3>{bucket}</h3>
      <button onClick={() => {
        const rand = (Math.floor)(Math.random() * fruits.length);
        bucket.push(fruits[rand]);
        setBucket(bucket);
        }}>과일 추가</button>
      <button onClick={() => {
        const rand = (Math.floor)(Math.random() * fruits.length);
        bucket.splice(rand, 1);
        setBucket([...bucket]);
      }}>과일 빼기</button>
      <button onClick={() => setBucket([])}>바구니 비우기</button>
      <ul>
        {bucket.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
    </div>
  );
}

export default MyArray;
