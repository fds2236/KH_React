import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassComp from './2022_10_13/ClassComp';
import Counter from './2022_10_13/Counter';
import Say from './2022_10_13/Say';
import Clock from './2022_10_13/Timer';
import App from './App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // SampleJSX 태그에 /는 닫힘태그
  <React.StrictMode>
    {/* <App/> */}
    {/* <ClassComp/> */}
    {/* <Counter/> */}
    {/* <Say/> */}
    <Clock/>
  </React.StrictMode>
);
