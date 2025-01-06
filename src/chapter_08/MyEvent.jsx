import React from 'react';

const MyEvent = () => {
  return (
    <div>
      <div style={{border: "5px solid", padding: 50}} onClick={() => console.log("최상위 클릭")}>
        <div style={{border: "5px solid", padding: 50}} onClick={(e) => {
          console.log(e);
          console.log(e.target);
          console.log(e.currentTarget); // 이벤트가 걸린 요소
          console.log(e.currentTarget.title);
        }} title="background title">
          <button style={{padding: 20}} onClick={() => console.log("최하위 클릭")}>클릭</button>
        </div>
      </div>
    </div>
  );
}

export default MyEvent;
