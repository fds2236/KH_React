import WelcomeProp from './2022_10_13/WelcomProp';
import './App.css';
// // 원래 클래스였던 부분인데 작년부터 함수형 프로그램으로 바뀜
// function App() {
// const name = "곰돌이사육사";
//  const validMember = <h1>환영합니다. {name}님.</h1> // document.getElementByID("name") 이런식으로 일일이 찾아주지 않아도 됨!
//  let invalidMember = <h1>환영합니다. 방문자님.</h1>;
//  let isMember = true;
//  if(isMember)
//  return(
// // <p>안녕하세요</p><p>오늘은 목요일입니다.</p> 
// // 에러 => 컴포넌트가 여러 개 있으면 부모 태그를 반드시 넣어줘야함
// // <><p>안녕하세요</p><p>오늘은 목요일입니다.</p> </> 
// // 빈 태그라도 부모 태그를 반드시 넣어줘야함(변경점이 있을 때 부모태그와 묶어서 날림)
// <>{validMember}</>);
// else return (<>{invalidMember}</>)
//  }


// WelcomProp호출
function App(){
    return (
        <div>
            <WelcomeProp name="천지훈" jobs = "변호사"/>
            <WelcomeProp name="백마리" jobs = "나도 변호사"/>
            <WelcomeProp name="서민혁" jobs = "meeeeeeeeeeee too"/>
            </div>
    );
}
export default App;
