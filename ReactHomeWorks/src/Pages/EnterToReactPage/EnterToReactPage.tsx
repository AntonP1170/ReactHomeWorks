import style from "./EnterToReactPage.module.css";
import CodeBlock from "@/Components/CodeBlock/CodeBlock";
import enterToReactPageCode from "./enterToReactPageCode";
import { useState } from "react";
import EtrHomework from "./homework/EtrHomework";
import Tabs from "@/Components/Tabs/Tabs";
import EtrPractice from "./practice/EtrPractice";

const EnterToReactPage = () => {
  const [tab, setTab] = useState<string>("homework");

  return (
    <div className="container">
      <div className={style.EnterToReactContent}>
        <Tabs
          title1={"homework"}
          title2={"practice"}
          change={setTab}
          state={tab}
        />
        {tab === "homework" && <EtrHomework />}
        {tab === "practice" && <EtrPractice />}
        <div>
          <CodeBlock
            title="EnterToReactPage.tsx:"
            code={enterToReactPageCode.EnterToReactPageCode}
          />
        </div>
        {tab === "homework" && (
          <>
            <CodeBlock
              title="EtrHomework.tsx:"
              code={enterToReactPageCode.EtrHomeworkCode}
            />
            <CodeBlock
              title="EtrHomeworkClassCity.tsx:"
              code={enterToReactPageCode.EtrHomeworkClassCityCode}
            />
            <CodeBlock
              title="EtrHomeworkClassBook.tsx:"
              code={enterToReactPageCode.EtrHomeworkClassBookCode}
            />
          </>
        )}
        {tab === "practice" && (
          <>
            <CodeBlock
              title="EtrPractice.tsx:"
              code={enterToReactPageCode.EtrPracticeCode}
            />
            <CodeBlock
              title="EtrPracticeClassHello.tsx:"
              code={enterToReactPageCode.EtrPracticeClassHelloCode}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default EnterToReactPage;
