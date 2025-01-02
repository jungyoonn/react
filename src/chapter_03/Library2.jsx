import React from 'react';
import Book from './Book';
import Mybook from './Mybook';

const result = [
  {
    name : "처음 만난 파이썬",
    numOfPage : 300
  },
  {
    name : "처음 만난 AWS",
    numOfPage : 400
  },
  {
    name : "처음 만난 리액트",
    numOfPage : 500
  }
];

const Library = (props) => {
  return (
    <div>
      {result.filter(el => el.numOfPage != 400).map(el => <Book name={el.name} numOfPage={el.numOfPage} />)}
      <Mybook name="스프링부트"  numOfPage={700}/>
    </div>
  );
}

export default Library;
