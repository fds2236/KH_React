import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // SampleJSX 태그에 /는 닫힘태그
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
