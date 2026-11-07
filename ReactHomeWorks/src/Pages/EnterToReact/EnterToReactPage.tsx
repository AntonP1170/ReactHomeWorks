import style from "./EnterToReactPage.module.css";
import CodeBlock from "@/Components/CodeBlock/CodeBlock";
import enterToReactPageCode from "./enterToReactPageCode";
import { useState } from "react";
import EtrHomework from "./homework/EtrHomework";
import Tabs from "@/Components/Tabs/Tabs";
import EtrPractice from "./practice/EtrPractice";
import EtrHomeworkCode from "./homework/EtrHomeworkCode";
import EtrPracticeCode from "./practice/EtrPracticeCode";

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
            code={enterToReactPageCode}
          />
        </div>
        {tab === "homework" && (
          <>
            <CodeBlock
              title="EtrHomework.tsx:"
              code={EtrHomeworkCode.EtrHomeworkCode}
            />
            <CodeBlock
              title="EtrHomework.tsx:"
              code={EtrHomeworkCode.EtrHomeworkClassCityCode}
            />
            <CodeBlock
              title="EtrHomework.tsx:"
              code={EtrHomeworkCode.EtrHomeworkClassBook}
            />
          </>
        )}
        {tab === "practice" && (
          <>
            <CodeBlock
              title="EtrPractice.tsx:"
              code={EtrPracticeCode.EtrPracticeCode}
            />
            <CodeBlock
              title="EtrPracticeClassHello.tsx:"
              code={EtrPracticeCode.EtrPracticeClassHelloCode}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default EnterToReactPage;
