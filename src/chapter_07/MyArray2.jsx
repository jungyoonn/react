import React from 'react';
import { useState } from 'react';

const MyArray2 = () => {
  const fruits = ['사과', '딸기', '포도', '복숭아', '귤'];
  // 초기값
  const counts = fruits.map(f => ({name: f, count: 0}));
  // 초기값의 복제본을 쓴다
  const [bucket, setBucket] = useState([...counts]);
  return (
    <div>
      {/* <h3>{bucket}</h3> */}
      <button onClick={() => {
        const rand = parseInt(Math.random() * bucket.length);
        bucket[rand].count++; // bucket 자체는 변하지 않기 때문에 불변성을 만족함
        setBucket([...bucket]);
        }}>과일 추가</button>
      <button onClick={() => {
        
      }}>과일 빼기</button>
      <button onClick={() => setBucket([...counts])}>바구니 비우기</button>
      <ul>
        {bucket.map((f, i) => <li key={i}>{f.name} {f.count}개</li>)}
      </ul>
    </div>
  );
}

export default MyArray2;
