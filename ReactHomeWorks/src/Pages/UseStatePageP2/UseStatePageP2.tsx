import style from "./UseStatePageP2.module.css";
import Timer from "@/Pages/UseStatePageP2/practice/Timer.tsx";
import Article from "@/Pages/UseStatePageP2/homework/Article.tsx";
import Tabs from "@/Components/Tabs/Tabs.tsx";
import {useEffect, useState} from "react";


const UseStatePageP2 = () => {
    const [tab, setTab] = useState<string>("practice")
    useEffect(() => {
        console.log(tab)
    }, [tab]);

    return (
        <div className="container">
            <div className={style.useStatePageP2Content}>
                <Tabs state={tab} change={setTab} title1={"homework"} title2={"practice"}/>
                {tab === "practice" && (<Timer/>)}
                {tab === "homework" && (<Article/>)}
            </div>
        </div>
    )
}
export default UseStatePageP2