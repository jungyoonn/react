import UserInfo from "./UserInfo";

const Comment = function(props) {
  const {author, text, date} = props;
  const eles = <div className="comment">
    <UserInfo author={author}/>
    <div className="comment-text">{text}</div>
    <div className="comment-date">{formatdate(date)}</div>
  </div>
  return eles;
}

function formatdate(d) {
  return new Date(d).toLocaleDateString('ko-KR');
}

export default Comment