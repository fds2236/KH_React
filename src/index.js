import React from 'react';
import ReactDOM from 'react-dom/client';
// import Card from './2022_10_17/UseState';
// import './Array.css'
// import Event from './2022_10_17/Event';
// import Event2 from './2022_10_17/Event2';
// import InputTest from './2022_10_17/Event2';
// import Event3 from './2022_10_17/Event3';
// import Event4 from './2022_10_17/Event4';
// import Event5 from './2022_10_17/Event5';
// import ArrayList from './2022_10_17/ArrayList';
// import ArrayMap from './2022_10_17/ArrayMap';
// import Array from './2022_10_17/Array';

// import Effect from './2022_10_18/UseEffect';
// import Reducer from './2022_10_18/UseReduce';
import Memo from './2022_10_18/UseMemo';

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
    {/* <Event/> */}
    {/* import이름이 꼭 파일 이름과 같지 않아도 됨 */}
    {/* <Event2/> 이렇게 써도 되고  <InputTest/> 이렇게 써도 됨 위 아래 이름만 맞춰주고 from 경로에 파일 이름만 잘 적어주면 된다 */}
    {/* <Event3/> */}
    {/* <Event4/> */}
    {/* <Event5/> */}
    {/* <ArrayList/> */}
    {/* <ArrayMap/> */}
    {/* <Array/> */}
    {/* <Card/> */}
   {/* <Effect/> */}
   {/* <Reducer/> */}
   <Memo/>
  </React.StrictMode>
);

