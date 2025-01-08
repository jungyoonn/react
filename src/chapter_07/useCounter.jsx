import React, { useState } from 'react';

const UseCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0)); // 음수가 들어가지 않도록!! count - 1과 0 중 더 큰 수를 리턴한다
  return [count, increaseCount, decreaseCount];
}

export default UseCounter;
