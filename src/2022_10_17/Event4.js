import { useState } from "react";
const Event4 = () => {
    const[value, setValue] = useState('grape');
    const handleChange = (event) => {
        setValue(event.target.value); // 발생한 이벤트의 값을 가져옴
    }
    const handleSubmit = (event) => {
        alert("선택한 과일 : " + value);
        event.preventDefault(); // 창이 새로고침되는 것을 막음
    }

    return (// value가 현재 선택된 값을 콤보박스에 저장하는 것
        <form onSubmit={handleSubmit}>
            <label>과일을 선택하세요
                <select value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">키위</option>
                </select>
            </label>
            <button type="submit">제출</button>

        </form>
    );
}

export default Event4;