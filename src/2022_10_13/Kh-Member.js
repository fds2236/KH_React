const khMember = {
    name : "찬호",
    group : "kh정보교육원",
    job : "Frontend",
    addr : "충북 청주시",
    gender : "남성"
}

// 사용자라면 환영합니다 + 사용자이름
// 사용자가 아니라면 가입 ㄱㄱ
const getGreeting = (user) => {
    if(user) return <h1>환영합니다. 웰컴{khMember.name}!!</h1>
    return <h1>가입 ㄱㄱ</h1>
}

const KhMemberInfo = () => {
    return(
        <div>
            <p>안녕하세요. 저는 {khMember.name}입니다.</p>
            <p>저는 {khMember.group}에서 현재 개발자 공부를 하고있습니다.</p>
            <p>저는 {khMember.job} 개발자를 생각 중입니다.</p>
            <p>주소는 {khMember.addr}입니다.</p>
            <p>성별은 {khMember.gender}입니다</p>
            <div>{getGreeting(true)}</div>
        </div>
    )
}
export default KhMemberInfo;