import {useState} from "react";
import style from "../UseStatePage.module.css"
import CounterLabel from "@/Pages/UseStatePage/practice/CounterLabel/CounterLabel.tsx";
import CounterButtons from "@/Pages/UseStatePage/practice/CounterButtons/CounterButtons.tsx";

const UseStatePagePractice = () => {
    const [count, setCount] = useState(0);
    return (
        <div className={style.CounterContainer}>
            <CounterLabel count={count}></CounterLabel>
            <CounterButtons state={count} setState={setCount} firstValue={25} secondValue={50} thirdValue={75}
                            fourthValue={100} fivethValue={25} sixthValue={50} seventhValue={75} eightValue={100}/>
        </div>
    )
}
export default UseStatePagePractice;