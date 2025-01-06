import React, { useEffect, useState } from 'react';

const MyEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `총 ${count}번 클릭했습니다`;
  }, [count]); // 빈 배열을 의존성 배열로 두게 되면 최초 렌더링 될 때에만 실행되고 이후에는 0 값이 유지된다 (언마운트 시에도 실행됨)
  // 의존성 배열 없이 useEffect를 사용하면 리렌더링 될 때마다 실행된다
  // return 함수가 있다면, 컴포넌트가 마운트 해제되기 전에 실행됨
  return (
    <div>
      <p>총 {count}번 클릭했습니다</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}

export default MyEffect;
