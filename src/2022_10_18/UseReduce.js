import { useReducer } from "react";
function reducer(state, action) {
    // atcion의 type에 따라서 다른 작업 수행
    switch(action.type) {
        case "INCREMENT":
            return {value:state.value +1};
        case "DECREMENT":
            return {value:state.value -1};
        default :
            return state;
    }
}

const Reducer = () => {
    const[state, dispatch] = useReducer(reducer, {value:0});
    return (
        <div>
            <p>현재 카운터 값은 <b>{state.value}</b></p>
            <button onClick={()=> dispatch({type:"INCREMENT", step: 2})}>+1</button>
            <button onClick={()=> dispatch({type:"DECREMENT", step: 2})}>-1</button>
        </div>
    )
}

export default Reducer;