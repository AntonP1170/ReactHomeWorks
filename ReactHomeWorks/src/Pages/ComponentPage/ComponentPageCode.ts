const componentPageCode = `
import CodeBlock from "@/Components/CodeBlock/CodeBlock.tsx";
import componentPageCode from "./ComponentPageCode.ts"

const ComponentPage = () => {
    return (
        <div className="container">
            <CodeBlock
                title="Component Page"
                code={componentPageCode}
            />
        </div>
    )

}
export default ComponentPage;
`

export default componentPageCode;