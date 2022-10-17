import { useState } from "react";
const Event5 = () => {
    const[value, setValue] = useState('270');
    const handleChange = (event) => {
        setValue(event.target.value);
    }

const handleSubmit = (event) => {
    alert("선택한 사이즈 : " + value);
    event.preventDefault();
}

return (
    <form onSubmit={handleSubmit}>
        <label>사이즈를 선택하세요
            <select value={value} onChange={handleChange}>
                <option value="220">220</option>
                <option value="230">230</option>
                <option value="240">240</option>
                <option value="250">250</option>
                <option value="260">260</option>
                <option value="270">270</option>
                <option value="280">280</option>
            </select>
        </label>
        <button type="submit">확인</button>
    </form>
);
}


export default Event5;