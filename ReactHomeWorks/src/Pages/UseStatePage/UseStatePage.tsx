import style from "./UseStatePage.module.css"
import Tabs from "@/Components/Tabs/Tabs.tsx";
import {useState} from "react";
import UseStatePagePractice from "@/Pages/UseStatePage/practice/UseStatePagePractice.tsx";

const UseStatePage = () => {
    const [tab, setTab] = useState<string>("homework");
    return (
        <div className="container">
            <div className={style.UseStatePageContent}>
                <Tabs title1={"homework"} title2={"practice"} state={tab} change={setTab}/>
                {tab === "practice" && (
                    <UseStatePagePractice/>
                )}
            </div>
        </div>
    )
}
export default UseStatePage;