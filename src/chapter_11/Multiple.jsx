import React, { useState } from 'react';

const TopingList = (props) => {
  const {topings, onSetMyTopings} = props;
  const [count, setCount] = useState(0);
  const [checks, setChecks] = useState([]);
  const [mySet, setMySet] = useState(new Set());
  console.log(topings);

  const handleChange = (e) => {
    console.log(e.target.checked);
    const c = e.target.checked;

    // 1. count를 이용한 방법

    // if(c && count >= 3) {
    //   alert("3개까지만 체크 가능합니다");
    //   e.target.checked = false;
    //   return;
    // }
    // setCount(count + (c ? 1 : -1));

    // 2. checks 배열을 이용한 방법
   
    // if(c && checks.length >= 3) {
    //   alert("3개까지만 체크 가능합니다");
    //   return;
    // }
    // c ? setChecks([...checks, e.target.value]) : checks.filter(ci => ci !== e.target.value);

    // 3. set을 이용한 방법
    if(c && mySet.size >= 3) {
      alert("3개까지만 체크 가능합니다");
      return;
    }
    const newSet = new Set(mySet);
    c ? newSet.add(e.target.value) : newSet.delete(e.target.value);
    setMySet(newSet);
    console.log(newSet);
    

    // 부모 컴포넌트에 자식의 state 전달
    onSetMyTopings(newSet);
  };
  
  return topings.length === 0 ? <h1>토핑이 없습니다</h1> : (
    <>
      <h3>최대 선택 가능 토핑은 3개입니다</h3>
      <ul>
        {topings.map((toping, i) => <li key={i}><label><input type='checkbox' name='toping' value={toping} checked={mySet.has(toping)} onChange={handleChange}/>{toping}</label></li>
        // 배열을 이용한 방법일 땐 checked={checks.include(toping)}
        )}
      </ul>
    </>
  );
}

const Multiple = () => {
  const [myTopings, setMyTopings] = useState(new Set());
  const topings = ["베이컨", "페퍼로니", "!파인애플!", "치즈", "고구마", "감자", "새우", "불고기"];

  return (
    <form onSubmit={e => {
      e.preventDefault();

      if(myTopings.size === 0) {
        alert("1개 이상의 토핑을 선택하세요");
        return;
      }
      alert(`선택한 토핑은 ${Array.from(myTopings).join(", ")}`);
    }}>
      <TopingList topings={topings} myTopings={myTopings} onSetMyTopings={setMyTopings}/>
      <button>주문</button>
    </form>
  );
}

export default Multiple;
