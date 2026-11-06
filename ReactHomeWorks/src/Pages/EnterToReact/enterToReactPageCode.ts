const enterToReactPageCode = `
import style from "./EnterToReact.module.css"
import CodeBlock from "@/Components/CodeBlock/CodeBlock";
import componentCode from "./EnterToReact";

const EnterToReact = () => {
  return (
    <div className="container">
      <div className={style.EnterToReactContent}>
        <div>
          <CodeBlock code={componentCode} />
        </div>
      </div>
    </div>
  );
};
export default EnterToReact;

`;
export default enterToReactPageCode;
