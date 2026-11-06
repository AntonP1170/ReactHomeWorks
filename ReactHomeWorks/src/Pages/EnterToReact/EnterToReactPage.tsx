import style from "./EnterToReactPage.module.css";
import CodeBlock from "@/Components/CodeBlock/CodeBlock";
import enterToReactPageCode from "./enterToReactPageCode";
import { useState } from "react";
import EtrHomework from "./EtrHomework";

const EnterToReactPage = () => {
  const [tab, setTab] = useState<string>("homework");
  return (
    <div className="container">
      <div className={style.EnterToReactContent}>
        
        {tab === "homework" && <EtrHomework />}
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
