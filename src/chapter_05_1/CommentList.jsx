import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: "정윤",
    comment: "안녕하세요!"
  },
  {
    name: "jungyoon",
    comment: "hello, world!"
  },
  {
    name: "sophia",
    comment: "2024/01/03"
  }
];

const CommentList = (props) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;
