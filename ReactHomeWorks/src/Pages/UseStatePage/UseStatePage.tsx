import style from "./UseStatePage.module.css"
import Tabs from "@/Components/Tabs/Tabs.tsx";
import {useState} from "react";
import UseStatePagePractice from "@/Pages/UseStatePage/practice/UseStatePagePractice.tsx";
import CodeBlock from "@/Components/CodeBlock/CodeBlock.tsx";
import UseStatePagePracticeCode from "@/Pages/UseStatePage/practice/UseStatePagePracticeCode.ts";
import UseStatePageHomework from "@/Pages/UseStatePage/homework/UseStatePageHomework.tsx";
import {
    UseStatePageHomeworkCode,
    RestaurantCode, LogInCode,
} from "@/Pages/UseStatePage/homework/UseStatePageHomeworkCode.ts";

const UseStatePage = () => {
    const [tab, setTab] = useState<string>("homework");
    return (
        <div className="container">
            <div className={style.UseStatePageContent}>
                <Tabs title1={"homework"} title2={"practice"} state={tab} change={setTab}/>
                {tab === "homework" && (
                    <>
                        <UseStatePageHomework/>
                        <CodeBlock title={"UseStatePageHomework.tsx:"} code={UseStatePageHomeworkCode}/>
                        <CodeBlock title={"Restaurant.tsx:"} code={RestaurantCode}/>
                        <CodeBlock title={"Restaurant.tsx:"} code={LogInCode}/>
                    </>
                )}
                {tab === "practice" && (
                    <UseStatePagePractice/>
                )}
                {tab === "practice" && (
                    <>
                        <CodeBlock title={"UseStatePagePractice.tsx:"}
                                   code={UseStatePagePracticeCode.UseStatePagePracticeCode}/>
                        <CodeBlock title={"CounterLabel.tsx:"} code={UseStatePagePracticeCode.CounterLabelCode}/>
                        <CodeBlock title={"CounterButtons.tsx:"} code={UseStatePagePracticeCode.CounterButtonsCode}/>
                    </>
                )}
            </div>
        </div>
    )
}
export default UseStatePage;