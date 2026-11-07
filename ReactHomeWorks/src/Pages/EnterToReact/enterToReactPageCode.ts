const enterToReactPageCode = `
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
            code={enterToReactPageCode}
          />
        </div>
      </div>
    </div>
  );
};
export default EnterToReactPage;


`;
export default enterToReactPageCode;
