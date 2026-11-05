import style from "./EnterToReact.module.css";
import CodeBlock from "@/Components/CodeBlock/CodeBlock";
import enterToReactCode from "./enterToReactCode";

const EnterToReact = () => {
  return (
    <div className="container">
      <div className={style.EnterToReactContent}>
        <div>
          <CodeBlock code={enterToReactCode} />
        </div>
      </div>
    </div>
  );
};
export default EnterToReact;
