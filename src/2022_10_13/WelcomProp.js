// ()안에 매개변수 들어올 수 있음
// props => 데이터의 덩어리
// props를 쓸 때 WelcomeProp자리의 이름은 항상 대문자로 시작해야함
function WelcomeProp(props) {
    // 두번째 방식(구조분해, 비구조화 할당)
    // props 하나의 덩어리를 각각의 변수에 쪼개서 나누어 담는 것
    // 순서는 상관없음
    const {name, job, font, children, color} = props;
    return (

        // 첫번째 방식(그냥 return문으로 다 불러오기)
        // <div>
        // <h3 style={{color:props.color, fontSize:props.font}}>안녕하세요.
        // {props.name}입니다. 저의 직업은 {props.job}입니다.{props.children}</h3>
        // </div>

        // 두번째 방식(구조분해)
        <div>
            <h3 style={{color:color, fontSize:font}}>안녕하세요.
            {name}입니다. 저의 직업은 {job}입니다.{children}</h3>
        </div>
    )
}

WelcomeProp.defaultProps = {
    name : "익명",
    job : "무직",
    color : "black",
    font: "2em"
}
export default WelcomeProp;