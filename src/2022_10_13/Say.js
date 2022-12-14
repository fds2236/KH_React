// useState 매우 중요......!!!
// 컴포넌트 트리는 프로터리를 통해 데이터가 흘러갈 수 있는 컴포넌트 계층 구조를 말함
// 리액트는 흐르는 데이터에 따라 다르게 컴포넌트가 렌더링됨
// 이러한 렌더링에 영향이 가는 데이터를 state라고 부르며 상태가 변화하면 컴포넌트 트리를 타고 흘러 다시 재렌더링됨
import { useState } from "react";
// 새로운 state변수를 선언
const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage("Welcome!!!");
    const onClickLeave = () => setMessage("Bye!!!");
    const [color, setColor] = useState("black");

    let prnMsg = "없음";
    const testClick =() => {
        prnMsg = "어서오세요^^";
        console.log(prnMsg);
    }
    // 어서오세요^^ 웹에 출력x why? 업데이트가 안되기때문에 useState로 화면 렌더링 다시 해줘야함!
    // console창에는 바뀜
    // 주의 : rerendering 조건문, 반복문에 넣으면 x => 내부적으로 돔을 날리고 다시 붙이는 것
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <button onClick={testClick}>테스트메시지</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:"red"}} onClick={()=>setColor("red")}>빨강색</button>
            <button style={{color:"green"}} onClick={()=>setColor("green")}>초록색</button>
            <button style={{color:"blue"}} onClick={()=>setColor("blue")}>파랑색</button>
        </div>
    )
}
export default Say;