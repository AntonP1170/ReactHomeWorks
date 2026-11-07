import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import style from "./CodeBlock.module.css";

interface IProps {
  code: string;
  title: string;
}
const CodeBlock = ({ code, title }: IProps) => {
  return (
    <div>
      <h2 className={style.codeBlockHeader}>{title}</h2>
      <div className={style.codeContainer}>
        <SyntaxHighlighter language={"tsx"} style={atomDark}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default CodeBlock;
