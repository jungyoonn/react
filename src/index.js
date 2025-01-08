import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import MyElement from './component/MyElement';
// import Library from './chapter_03/Library';
// import Library2 from './chapter_03/Library2';
// import Clock from './chapter_04/Clock';
// import Welcome from './chapter_05/Welcome';
// import Comment from './chapter_05/Comment';
// import CommentList from './chapter_05_1/CommentList';
// import AirBnb from './chapter_05_exer/AirBnb';
// import AirBnbList from './chapter_05_exer/AirBnbList';
// import NotificationList from './chapter_06/NotificationList';
// import Counter from './chapter_07/Counter';
// import MyArray from './chapter_07/MyArray';
// import MyArray2 from './chapter_07/MyArray2';
// import MyEffect from './chapter_07/MyEffect';
// import Toggle from './chapter_08/Toggle';
// import MyEvent from './chapter_08/MyEvent';
// import LandingPage from './chapter_09/LandingPage';
// import NumberList from './chapter_10/NumberList';
// import AttendanceBook from './chapter_10/AttendanceBook';
// import MyForm from './chapter_11/MyForm';
// import Multiple from './chapter_11/Multiple';
// import Calculator from './chapter_12/Calculator';
// import ProfileCard from './chapter_13/ProfileCard';
import Accommodate from './chapter_07/Accommodate';

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyElement /> */}
    {/* <Library2 /> */}
    {/* <Clock /> */}
    {/* <Welcome name="jungyoon" /> */}
    {/* <Comment author={{name: 'jungyoon', avatarUrl: 'https://placehold.co/600x400'}} text="샘플 텍스트" date={new Date()}/> */}
    {/* <CommentList /> */}
    {/* <AirBnbList /> */}
    {/* <NotificationList /> */}
    {/* <Counter /> */}
    {/* <MyArray2 /> */}
    {/* <MyEffect /> */}
    {/* <Toggle /> */}
    {/* <MyEvent /> */}
    {/* <LandingPage /> */}
    {/* <NumberList numbers={[1,2,3,4,5]} /> */}
    {/* <AttendanceBook /> */}
    {/* <MyForm /> */}
    {/* <Multiple /> */}
    {/* <Calculator /> */}
    {/* <ProfileCard /> */}
    <Accommodate />
  </React.StrictMode>
  );
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
