// import { useState } from "react";
// // 이름, 직책, 회사명, 회사주소, 이메일, 전화번호 입력받아서 명함 형태로 출력하기
// const Card = () => {
//     const [name, setName] = useState(''); // default는 공백
//     const [job, setJob] = useState('');
//     const [company, setCompany] = useState('');
//     const [addr, setAddr] = useState('');
//     const [email, setEmail] = useState('');
//     const [tel, setTel] = useState('');

//     const onChangeName = e => setName(e.target.value);
//     const onChangeJob = e => setJob(e.target.value);
//     const onChangeCompany = e => setCompany(e.target.value);
//     const onChangeAddr = e => setAddr(e.target.value);
//     const onChangeEmail = e => setEmail(e.target.value);
//     const onChangeTel = e => setTel(e.target.value);

// return(
//     <form>
//     <h1>회원정보 가입</h1>
//     <p><input type="text" placeholder="이름을 입력하세요" value={name} onChange={onChangeName} ></input><button>확인</button></p>
//     <p><input type="text" placeholder="직책을 입력하세요" value={job} onChange={onChangeJob}></input><button>확인</button></p>
//     <p><input type="text" placeholder="회사를 입력하세요" value={company} onChange={onChangeCompany}></input><button>확인</button></p>
//     <p><input type="text" placeholder="회사주소를 입력하세요" value={addr} onChange={onChangeAddr}></input><button>확인</button></p>
//     <p><input type="text" placeholder="메일을 입력하세요" value={email} onChange={onChangeEmail}></input><button>확인</button></p>
//     <p><input type="text" placeholder="전화번호를 입력하세요" value={tel} onChange={onChangeTel}></input><button>확인</button></p>
//     <button>제출</button>
//     <div>
//     <h1>명함</h1>
//     <p>이름 : {name}</p>
//     <p>직책 : {job}</p>
//     <p>회사 : {company}</p>
//     <p>회사주소 : {addr}</p>
//     <p>메일 : {email}</p>
//     <p>전화번호 : {tel}</p>
//     </div>
//     </form>
//     )  
//     }
// // 삼항연산자, && ||민 사용가능(조건문 사용불가)

// export default Card;


import { useState } from "react";
const memberObj = {
    name : "",
    position : "",
    address : "",
    eMail : "",
    phone : ""
};

const NameCard = () => {
    return (
        <>
            <h3>명함 정보 출력</h3>
            <p>이름 : {memberObj.name}</p>
            <p>직책 : {memberObj.position}</p>
            <p>주소 : {memberObj.address}</p>
            <p>메일 : {memberObj.eMail}</p>
            <p>폰   : {memberObj.phone}</p>
        </>
    );
};

const MemberInfo = () => {
    const [name, setName] = useState('');
    const [pos, setPos] = useState('');
    const [addr, setAddr] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [submit, setSubmit] = useState(false);

    const onChangeName = (e) => setName(e.target.value);
    const onChangePos = (e) => setPos(e.target.value);
    const onChangeAddr = (e) => setAddr(e.target.value);
    const onChangeMail = (e) => setMail(e.target.value);
    const onChangePhone = (e) => setPhone(e.target.value);

    const onClickName = () => memberObj.name = name;
    const onClickPos = () => memberObj.position = pos;
    const onClickAddr = () => memberObj.address = addr;
    const onClickMail = () => memberObj.eMail = mail;
    const onClickPhone = () => memberObj.phone = phone;

    const onSubmit = () => {
        console.log(memberObj);
        setSubmit(true);
    }

    return (
        <div>
            <h1>회원 정보 가입</h1>
            <input type="text"  placeholder="이름 입력" value={name} onChange={onChangeName} />
            <button onClick={onClickName}>이름</button>
            <br />
            <input type="text" placeholder="직책 입력" value={pos} onChange={onChangePos} />
            <button onClick={onClickPos}>직책</button>
            <br />
            <input type="text" placeholder="주소 입력" value={addr} onChange={onChangeAddr} />
            <button onClick={onClickAddr}>주소</button>
            <br />
            <input type="text" placeholder="메일 입력" value={mail} onChange={onChangeMail} />
            <button onClick={onClickMail}>메일</button>
            <br />
            <input type="text" placeholder="폰 입력" value={phone} onChange={onChangePhone} />
            <button onClick={onClickPhone}>폰</button>
            <br />
            <button onClick={onSubmit}>제출</button>
            {submit && <NameCard />}
        </div>        
    )
}
export default MemberInfo;