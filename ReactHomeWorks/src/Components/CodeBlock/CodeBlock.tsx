import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import style from "./CodeBlock.module.css"

interface IProps {
  code: string;
}
const CodeBlock = ({ code }: IProps) => {
  return (
    <div className={style.codeBlockContainer}>
        <h2 className={style.codeBlockHeader}>Code:</h2>
      <SyntaxHighlighter language={"tsx"} style={atomDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
export default CodeBlock;
