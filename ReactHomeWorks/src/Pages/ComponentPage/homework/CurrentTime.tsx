import {useEffect, useState} from "react";

const CurrentTime = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const itv = setInterval(() => {
            setDate(new Date());
        }, 1000)
        return () => {
            clearInterval(itv);
        }
    }, [])
    return (
        <h3>{date.toLocaleTimeString()}</h3>
    )
}
export default CurrentTime;