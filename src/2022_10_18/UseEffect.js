import { useState, useEffect } from "react";

// const Effect = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickname] = useState('');
//     useEffect(() => {
//         console.log("렌더링이 완료되었습니다.");
//         console.log({name, nickname});
//     }, [name]); // 빈 배열 => 화면 처음에만 렌더링 됨
//     // [] 배열안에 들어오는 값이 바뀌면 effect를 불러준다는 것
//     const onChangeName = e => {
//         setName(e.target.value);
//     }
//     const onChangeNickname = e => {
//         setNickname(e.target.value);
//     }
//     return(
//         <div>
//             <div>
//               <input value={name} onChange={onChangeName} />
//               <input value={nickname} onChange={onChangeNickname} />
//             </div>
//             <div><b>이름 : </b>{name}</div>
//             <div><b>닉네임 : </b>{nickname}</div>
//         </div>
//     )
// }

const Effect = () => {
    const[name, setName] = useState('');
    const[nickname, setNickname] = useState('');
    useEffect(() => {
        console.log("렌더링이 완료되었습니다.");
        console.log({name, nickname});
    });

    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    );
}
export default Effect;