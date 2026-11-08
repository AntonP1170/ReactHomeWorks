import CodeBlock from "@/Components/CodeBlock/CodeBlock.tsx";
import componentPageCode from "./ComponentPageCode.ts";
import style from "./ComponentPage.module.css";
import Tabs from "@/Components/Tabs/Tabs.tsx";
import { useState } from "react";
import ComponentPagePractice from "./practice/ComponentPagePractice.tsx";

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
        {tab === "practice" && <ComponentPagePractice />}
        <CodeBlock title="Component Page" code={componentPageCode} />
      </div>
    </div>
  );
};
export default ComponentPage;
