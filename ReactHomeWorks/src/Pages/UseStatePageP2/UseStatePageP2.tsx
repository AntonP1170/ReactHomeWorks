import style from "./UseStatePageP2.module.css";
import Timer from "@/Pages/UseStatePageP2/practice/Timer.tsx";
import Article from "@/Pages/UseStatePageP2/homework/Article.tsx";
import Tabs from "@/Components/Tabs/Tabs.tsx";
import CodeBlock from "@/Components/CodeBlock/CodeBlock.tsx";
import {useEffect, useState} from "react";
import {TimerCode} from "@/Pages/UseStatePageP2/practice/UseStatePageP2PracticeCode.ts";
import {
    ArticleCode,
    ArticleFormCode,
} from "@/Pages/UseStatePageP2/homework/UseStatePageP2HomeworkCode.ts";


const UseStatePageP2 = () => {
    const [tab, setTab] = useState<string>("practice")
    useEffect(() => {
        console.log(tab)
    }, [tab]);

    return (
        <div className="container">
            <div className={style.useStatePageP2Content}>
                <Tabs state={tab} change={setTab} title1={"homework"} title2={"practice"}/>
                {tab === "practice" && (
                    <>
                        <Timer/>
                        <CodeBlock title="Timer.tsx:" code={TimerCode}/>
                    </>
                )}
                {tab === "homework" && (
                    <>
                        <Article/>
                        <CodeBlock title="Article.tsx:" code={ArticleCode}/>
                        <CodeBlock title="ArticleForm.tsx:" code={ArticleFormCode}/>
                    </>
                )}
            </div>
        </div>
    )
}
export default UseStatePageP2