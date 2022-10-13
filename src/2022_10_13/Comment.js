const formatDate = (date) => {
    return date.toLocaleDateString();
}
const Comment = (props) => {
    return (
        <div>
            <div>
                <p>test</p>
                <img src={props.author.avatarUrl} alt={props.author.name}/>
                <div>{props.author.name}</div>
            </div>
            <div>{props.text}</div>
            <div>{formatDate(props.date)}</div>
        </div>
    )
}
export default Comment;