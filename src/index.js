import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassComp from './2022_10_13/ClassComp';
import Counter from './2022_10_13/Counter';
import Say from './2022_10_13/Say';
import Clock from './2022_10_13/Timer';
import App from './App';
import './index.css';
// ReactDOM에는 render메서드가 내장되어있어서 리액트 엘리먼트를 렌더링할 수 있음
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // SampleJSX 태그에 /는 닫힘태그
  // 예를 들어 <App/>을 ReactDom.render()함수의 첫번째 인자로 전달하여 App 컴포넌트가 반환하는 것들을 화면에 그려줌
  <React.StrictMode>
    {/* <App/> */}
    {/* <ClassComp/> */}
    {/* <Counter/> */}
    {/* <Say/> */}
    <Clock/>
  </React.StrictMode>
);
