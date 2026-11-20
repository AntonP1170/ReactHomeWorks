import style from "./ComponentPageP2.module.css"
import Tabs from "@/Components/Tabs/Tabs.tsx";
import {useState} from "react";
import ComponentPageP2Practice from "@/Pages/ComponentPageP2/practice/ComponentPageP2Practice.tsx";
import ComponentPageP2Homework from "@/Pages/ComponentPageP2/homework/ComponentPageP2Homework.tsx";
import CodeBlock from "@/Components/CodeBlock/CodeBlock.tsx";
import {
    ComponentPageP2HomeworkCode,
    CinemaScheduleCode,
    BlogPostsCode,
    CitiesInfoCode,
} from "@/Pages/ComponentPageP2/homework/ComponentPageHomeworkCode.ts";
import {
    ComponentPageP2PracticeCode,
    ImageFormCode,
    CompanyCode,
    FacultyCode,
    RestaurantMenuCode,
} from "@/Pages/ComponentPageP2/practice/ComponentPageP2PracticeCode.ts";


const ComponentPageP2 = () => {
    const [tab, setTab] = useState<string>("homework");

    return (
        <div className={"container"}>
            <div className={style.componentPageP2Content}>
                <Tabs state={tab} change={setTab} title1={"homework"} title2={"practice"}/>
                {tab === "homework" && (
                    <>
                        <ComponentPageP2Homework/>
                        <CodeBlock title="ComponentPageP2Homework.tsx:" code={ComponentPageP2HomeworkCode}/>
                        <CodeBlock title="CinemaSchedule.tsx:" code={CinemaScheduleCode}/>
                        <CodeBlock title="BlogPosts.tsx:" code={BlogPostsCode}/>
                        <CodeBlock title="CitiesInfo.tsx:" code={CitiesInfoCode}/>
                    </>
                )}
                {tab === "practice" && (
                    <>
                        <ComponentPageP2Practice/>
                        <CodeBlock title="ComponentPageP2Practice.tsx:" code={ComponentPageP2PracticeCode}/>
                        <CodeBlock title="ImageForm.tsx:" code={ImageFormCode}/>
                        <CodeBlock title="Company.tsx:" code={CompanyCode}/>
                        <CodeBlock title="Faculty.tsx:" code={FacultyCode}/>
                        <CodeBlock title="RestaurantMenu.tsx:" code={RestaurantMenuCode}/>
                    </>
                )}
            </div>
        </div>
    )
}
export default ComponentPageP2