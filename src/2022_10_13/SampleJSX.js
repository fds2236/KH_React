// 둘 중 하나 선택
// function SampleJSX() {}
// const SampleJSX = () => {}
import './Sample.css'
function SampleJSX() {
    const name = "silverbell";
    // const textStyle = {// 코딩영역이라 하이픈 사용불가 => 카멜 표기법으로 다 바꿔서 표기
    //     backgroundColor : "#222",
    //     color : "royalBlue",
    //     fontSize : "2em"
    // };
    // const validMember = <h1>환영합니다. {name}님.</h1> // document.getElementByID("name") 이런식으로 일일이 찾아주지 않아도 됨!
    // let invalidMember = <h1>환영합니다. 방문자님.</h1>;
    // let isMember = true;
    // if(isMember) return(<>{validMember}</>);
    // else return (<>{invalidMember}</>);

    // return (
    //     // div태그안에 if문이나 case문 불가 => 주로 삼항연산자 사용
    //     <div>
    //         {name === "곰돌이" ? (<h1>곰돌이 입니다.</h1>):(<h1>곰돌이가 아닙니다.</h1>)}
    //     </div>
    // );

    return <div className="textStyle">{name === "곰돌이" &&  <h1>곰돌이를 출력합니다.</h1>}</div>
}

export default SampleJSX;