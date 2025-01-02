import React from 'react';

// 컴포넌트는 루트 태그를 반드시 하나 가져야 한다
const Book = (props) => {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다`}</h1>
      <h2>이 책은 총 {props.numOfPage}페이지로 이뤄져 있습니다</h2>
    </div>
  );
}

export default Book;
