import {useState} from "react";
import ArticleForm, {type ArticleForm as ArticleFormData} from "@/Pages/UseStatePageP2/homework/ArticleForm.tsx";
import style from "./Article.module.css";


const Article = () => {
    const [submitted, setSubmitted] = useState<ArticleFormData | null>(null);


    return (
        <div>
            {submitted ? (<div className={style.article}
                               style={{textAlign: submitted.articleAlign as "left" | "center" | "right" | "justify"}}>
                <h2 style={{
                    backgroundColor: submitted.titleBackground,
                    fontFamily: submitted.fontName,
                    fontSize: submitted.fontSize,
                    color: submitted.fontColor,
                    textAlign: submitted.articleTitleAlign as "left" | "center" | "right" | "justify",
                }}>{submitted.articleTitle}</h2>
                <h2 style={{
                    backgroundColor: submitted.authorNameBackground,
                    fontFamily: submitted.fontName,
                    fontSize: submitted.fontSize,
                    color: submitted.fontColor,
                    textAlign: submitted.authorNameAlign as "left" | "center" | "right" | "justify",
                }}>{submitted.articleAuthor}</h2>
                <p style={{
                    backgroundColor: submitted.textBackground,
                    fontFamily: submitted.fontName,
                    fontSize: submitted.fontSize,
                    color: submitted.fontColor,
                    textAlign: submitted.articleTextAlign as "left" | "center" | "right" | "justify",
                }}>{submitted.articleText}</p>
                <h4 style={{
                    backgroundColor: submitted.dateBackground,
                    fontFamily: submitted.fontName,
                    fontSize: submitted.fontSize,
                    color: submitted.fontColor,
                    textAlign: submitted.articleDateAlign as "left" | "center" | "right" | "justify",
                }}>{submitted.articleDate}</h4>
                <div style={{textAlign: submitted.articleImageAlign as "left" | "center" | "right" | "justify"}}>
                    <img src={submitted.articleImage} alt="article image"/>
                </div>
            </div>) : (
                <ArticleForm setSubmitted={setSubmitted}/>

            )}

        </div>

    )
}
export default Article;
