// 화면에 뿌려주는 방법 1) ArrayList, 2)ArrayMap
// 배열로 뿌려주는 방법(배열의 개수를 알아야만 가능)
// 비추천
const User = (props) => {
    return (
        <div>
            <b>{props.user.userName}</b> <span>{props.user.email}</span>
        </div>
    );

}
const ArrayList = () => {
const users = [// 객체 3개 생성
    { 
        id : 100,
        userName : "천지훈",
        email : "1000won@gmail.com"
    }, 
    {
        id : 200,
        userName : "백마리",
        email : "2000won@gamil.com"
    }, {
        id : 300,
        userName : "서민혁",
        email : "3000won@gamil.com"
    }
];

// 첫번째 방법
// return(
//     <div>
//         <div>
//         <b>{users[0].userName}</b> <span>{users[0].email}</span>
//         </div>
//         <div>
//         <b>{users[1].userName}</b> <span>{users[1].email}</span>
//         </div>
//         <div>
//         <b>{users[2].userName}</b> <span>{users[2].email}</span>
//         </div>
//     </div>
//     )

// 두번째 방법
return(
    // 초록색 User는 컴포넌트(컴포넌트는 항상 대문자로 시작)
    <div>
        {/* props를 넘겨주는 부모 컴포넌트 */}
        <User user={users[0]}/>
        <User user={users[1]}/>
        <User user={users[2]}/>
    </div>
    )
}
export default ArrayList;