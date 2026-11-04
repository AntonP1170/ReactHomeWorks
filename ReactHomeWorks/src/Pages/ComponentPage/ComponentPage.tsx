import style from "./ComponentPage.module.css"
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

const ComponentPage = () => {
    return (
        <div className='container'>
            <div className={style.componentPageContent}>
                <h2>
                    <SyntaxHighlighter language={"javascript"} style={atomDark}>
                        console.log("Hello, world!")
                    </SyntaxHighlighter>

                </h2>
            </div>
        </div>
    )
}
export default ComponentPage