// Map이란? 파라미터로 전달된 함수를 사용해서 배열내의 각 요소를 규칙에 따라 변환 후 새로운 배열 생성
// let arr = [3,4,5,6,7]
// let newArr = arr.map(e => e * 3);

import { useState } from "react";

const ArrayMap = () => {
    // 1번 예시
    // const numbers = [1,2,3,4,5,6,7]
    // const names = ["천지훈", "백마리", "서민혁", "미미", "안유진", "유나", "유재석"]
    // const names2 = [ // 리터럴 객체 생성
    //     {firstName : "은종", lastName : "정"},
    //     {firstName : "도연", lastName : "김"},
    //     {firstName : "수빈", lastName : "이"},
    //     {firstName : "찬호", lastName : "정"}
    // ];
    // const listItems = numbers.map(e => <li>{e * 3}</li>)
    // const listItems2 = names.map(e => <p>{e}</p>)
    // const fullNames = names2.map(e => <div>{e.lastName}{e.firstName}</div>)

    // return(
    //     <>
    //             <ul>{listItems}</ul>
    //             <h3>{listItems2}</h3>
    //             <h3>{fullNames}</h3>
    //     </>
    // )



    // 2번 예시
    // const seasons = ["새로운 봄", "활기찬 여름", "풍성한 가을", "쓸쓸한 겨울"]
    // // const seasonList = seasons.map(e => <p>{e}</p>);
    // const seasonList = seasons.map((seasons, index) => <p key={index}>{seasons}</p>);
    // return <h1>{seasonList}</h1>



    // 3번 예시
    // 동적으로 변하는 배열 사용, id는 자동으로 증가
    // const ArrayMap = () => {
        const [names, setNames] = useState ([
            {id:1, text:"청소하기"},
            {id:2, text:"점심먹기"},
            {id:3, text:"산책하기"},
            {id:4, text:"공부하기"},
        ]);
        const [inputText, setInputText] = useState("");
        const [nextId, setNextId] = useState(5);
        const onChange = e => setInputText(e.target.value); // 인풋창에서 입력받는 값
        const onClick = () => { // concat은 이어 붙이는 것(배열 갱신은 push, 새로 만드는 것은 concat)
            // 기존의 names에다가 concat으로 새로운 배열 추가
            const nextNames = names.concat({
                id: nextId,
                text: inputText
            });
            setNextId(nextId+1);
            setNames(nextNames);
            setInputText('');
        };
        const namesList = names.map(name => <li key={name.id}>{name.text}</li>);

        return (
            <div>
                <input value={inputText} onChange={onChange} />
                <button onClick={onClick}>추가</button>
            </div>
        )
    }


export default ArrayMap;




