import { useState } from "react";
const Clock = () => {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    setInterval(tick, 1000);
    return (
        <div>
            <h1>현재 시간</h1>
            <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
        </div>
    )
}
export default Clock;