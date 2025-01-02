import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyElement from './component/MyElement';

import Library from './chapter_03/Library';
import Library2 from './chapter_03/Library2';
import Clock from './chapter_04/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyElement /> */}
    {/* <Library2 /> */}
    <Clock />
  </React.StrictMode>
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
