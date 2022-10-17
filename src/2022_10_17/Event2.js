import { useState } from "react";
const Event2 = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username = " : " + message);
        setUsername('');
        setMessage('');
    }
    const onKeyPress = e => {
        if(e.key === "Enter") {
            onClick();
        }
    } 
    return(
        <div>
        <h1>이벤트 연습</h1>
        {/* enter키를 눌렀을 때도 동작, 클릭했을 떄도 동작 */}
        <input type="text" placeholder="사용자명" value={username} onChange={onChangeUsername}/>
        <input type="text" placeholder="아무거나" value={message}
        onChange={onChangeMessage} onKeyPress={onKeyPress}/>
        <button onClick={onClick}>확인</button>
        </div>
    )
}
export default Event2;