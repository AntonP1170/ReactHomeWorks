import CodeBlock from "@/Components/CodeBlock/CodeBlock.tsx";
import componentPageCode from "./ComponentPageCode.ts";
import style from "./ComponentPage.module.css";
import Tabs from "@/Components/Tabs/Tabs.tsx";
import {useState} from "react";
import ComponentPagePractice from "./practice/ComponentPagePractice.tsx";
import ComponentPageHomework from "@/Pages/ComponentPage/homework/ComponentPageHomework.tsx";
import {
    ComponentPagePracticeCode,
    MusicBandCode,
    PizzaRecipeCode,
    ShakespeareComponentCode,
    AuthorInfoCode,
    BookInfoCode,
    WorkListCode,
} from "./practice/PracticePageComponentCode.ts";
import {
    ComponentPageHomeworkCode,
    FavoriteMovieCode,
    CurrentTimeCode,
    MyPetCode,
} from "@/Pages/ComponentPage/homework/ComponentPageHomeworkCode.ts";

const ComponentPage = () => {
    const [tab, setTab] = useState<string>("homework");
    return (
        <div className="container">
            <div className={style.ComponentPageContent}>
                <Tabs
                    title1={"homework"}
                    title2={"practice"}
                    state={tab}
                    change={setTab}
                />
                {tab === "practice" && (
                    <>
                        <ComponentPagePractice/>
                        <CodeBlock title="ComponentPagePractice.tsx:" code={ComponentPagePracticeCode}/>
                        <CodeBlock title="MusicBand.tsx:" code={MusicBandCode}/>
                        <CodeBlock title="PizzaRecipe.tsx:" code={PizzaRecipeCode}/>
                        <CodeBlock title="ShakespeareComponent.tsx:" code={ShakespeareComponentCode}/>
                        <CodeBlock title="AuthorInfo.tsx:" code={AuthorInfoCode}/>
                        <CodeBlock title="BookInfo.tsx:" code={BookInfoCode}/>
                        <CodeBlock title="WorkList.tsx:" code={WorkListCode}/>
                    </>
                )}
                {tab === "homework" && (
                    <>
                        <ComponentPageHomework/>
                        <CodeBlock title="ComponentPageHomework.tsx:" code={ComponentPageHomeworkCode}/>
                        <CodeBlock title="FavoriteMovie.tsx:" code={FavoriteMovieCode}/>
                        <CodeBlock title="CurrentTime.tsx:" code={CurrentTimeCode}/>
                        <CodeBlock title="MyPet.tsx:" code={MyPetCode}/>
                    </>
                )}
                <CodeBlock title="Component Page" code={componentPageCode}/>
            </div>
        </div>
    );
};
export default ComponentPage;
