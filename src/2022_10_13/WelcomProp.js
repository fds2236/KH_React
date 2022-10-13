// ()안에 매개변수 들어올 수 있음
// porps => 데이터의 덩어리
// props를 쓸 때 WelcomeProp자리의 이름은 항상 대문자로 시작해야함
function WelcomeProp(props) {
    return (
        <div>
        <h3>안녕하세요. {props.name}입니다. 저의 직업은 {props.jobs}입니다.</h3>
        </div>
    )
}
export default WelcomeProp;