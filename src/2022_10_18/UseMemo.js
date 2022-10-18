// useMemo? 컴포넌트의 최적화를 위한 Hook(불필요한 렌더링을 막음)
// 원할 때만 렌더링하도록 구현하는 것
import {useMemo, useState} from "react";
const getAverage = nums => {
    console.log("평균값 계산 중....");
    if(nums.length === 0) return 0; // 배열에 들어와있는 값이 었다면 0
    // 배열의 각 요소를 순회하면서 callback함수의 실행 결과를 누적하여 하나의 결과값을 반환
    const sum = nums.reduce((a,b) => a + b)
    return sum /nums.length;
}

// 컴포넌트의 이름은 항상 대문자로 시작
const Memo = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    }

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    const avg = useMemo(() =>  getAverage(list), [list]) 

    return(
        <div>
        {/* 원할 때만 렌더딩 되도록 => 등록버튼 누를 때만 렌더링되도록 구현 */}
            <input value = {number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
            <p><b>평균값 : </b>{avg}</p>
        </div>
    )
};
export default Memo;