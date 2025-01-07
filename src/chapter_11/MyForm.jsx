import React, { useState } from 'react';

const MyForm = () => {
  const [name, setName] = useState('');
  const [req, setReq] = useState('');
  const [fruit, setFruit] = useState('');
  const [file, setFile] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    // console.log(name);
    !fruit && alert("과일을 선택하세요");
  }

  const handleChange = (e) => {
    let val = e.target.value;

    switch (e.target.id) {
      case "name" :
        // setName(e.target.value);
        // setName(e.target.value.toUpperCase()); 대문자만 입력받기

        // 숫자만 입력받게 변형
        setName(val.replace(/[^0-9]/g, ''));
        break;
      case "req" :
        // 영소문자 입력 (한글, 숫자도 가능)
        // setReq(val.replace(/[A-Z!@#$%^&*()=-?+]/g, ''));
        setReq(val.toUpperCase());
        break;
      case "fruit" :
        // 반드시 과일을 선택하게 지정
        // 과일 미선택시 alert로 알림 메시지
        setFruit(val);
        console.log(val);
        break;
      case "file" :
        console.log(Array.from(e.target.files, f => f.name));
        setFile(Array.from(e.target.files, f => f.name));
        break;
      default:
    }
  }

  const FileInput = <input type='file' id='file' name='file' onChange={handleChange} multiple />;

  return (
    <form onSubmit={handleSubmit}>
      <label>이름: <input type='text' name='name' id='name' onChange={handleChange} value={name}/></label>
      <label>
        <p>요청사항</p>
        <textarea onChange={handleChange} id='req' name='req' value={req}></textarea>
      </label>
      <br></br>
      <label htmlFor="fruit"><p>과일을 선택하세요</p></label>
      <select id='fruit' name='fruit' onChange={handleChange}>
        <option value={''}>과일을 선택하세요</option>
        <option value={'apple'}>사과</option>
        <option value={'banana'}>바나나</option>
        <option value={'grape'}>포도</option>
        <option value={'watermelon'}>수박</option>
      </select>
      <br></br>
      <input type='file' id='file' name='file' onChange={handleChange} multiple />
      {/* 파일 업로드 후 value 변경 불가 >> 조건부 렌더링을 통해 컴포넌트 재 로드 할 경우 <FileInput /> */}
      <p>업로드된 파일</p>
      <ul>
        {file.map(f => <li key={f}>{f}</li>)}
      </ul>
      <br></br>
      <button>제출</button>
    </form>
  );
}

export default MyForm;
