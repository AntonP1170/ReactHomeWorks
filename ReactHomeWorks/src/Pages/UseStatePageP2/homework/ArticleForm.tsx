import style from "@/Pages/UseStatePageP2/homework/Article.module.css";
import {useForm, useWatch} from "react-hook-form";

export interface ArticleForm {
    articleTitle: string;
    articleAuthor: string;
    articleText: string;
    articleDate: string;
    fontName: string;
    fontColor: string,
    fontSize: string,
    titleBackground: string,
    authorNameBackground: string,
    textBackground: string,
    dateBackground: string,
    articleImage: string,
    articleAlign: string,
    articleTitleAlign: string,
    authorNameAlign: string,
    articleTextAlign: string,
    articleDateAlign: string,
    articleImageAlign: string,
}

interface ArticleFormProps {
    setSubmitted: (val: ArticleForm) => void;
}

const ArticleForm = ({setSubmitted}: ArticleFormProps) => {
    const {register, control, formState: {errors}, handleSubmit} = useForm<ArticleForm>();
    const articleImage = useWatch({control, name: "articleImage"});
    const handleArticle = (data: ArticleForm) => {
        setSubmitted(data);
    }

    return (
        <form className={style.form} onSubmit={handleSubmit(handleArticle)}>
            <div className={style.field}>
                <label htmlFor="articleTitle">Article title</label>
                <input
                    type="text"
                    id="articleTitle"
                    {...register("articleTitle", {
                        required: "Enter article title",
                        minLength: {value: 2, message: "At least 2 characters"},
                    })}
                />
                {errors.articleTitle && <p className={style.error}>{errors.articleTitle.message}</p>}
            </div>

            <div className={style.field}>
                <label htmlFor="articleAuthor">Article author</label>
                <input
                    type="text"
                    id="articleAuthor"
                    {...register("articleAuthor", {
                        required: "Enter article author",
                        minLength: {value: 2, message: "At least 2 characters"},
                    })}
                />
                {errors.articleAuthor && <p className={style.error}>{errors.articleAuthor.message}</p>}
            </div>


            <div className={style.field}>
                <label htmlFor="articleText">Article text</label>
                <textarea
                    id="articleText"
                    rows={5}
                    {...register("articleText", {
                        required: "Enter article text",
                        minLength: {value: 10, message: "At least 10 characters"},
                    })}
                />
                {errors.articleText && <p className={style.error}>{errors.articleText.message}</p>}
            </div>


            <div className={style.field}>
                <label htmlFor="articleDate">Article date</label>
                <input
                    type="date"
                    id="articleDate"
                    {...register("articleDate", {required: "Choose article date"})}
                />
                {errors.articleDate && <p className={style.error}>{errors.articleDate.message}</p>}
            </div>

            <div className={style.field}>
                <label htmlFor="fontName">Font name</label>
                <input
                    type="text"
                    id="fontName"
                    {...register("fontName", {
                        required: "Enter font name",
                        minLength: {value: 2, message: "At least 2 characters"},
                    })}
                />
                {errors.fontName && <p className={style.error}>{errors.fontName.message}</p>}
            </div>

            <div className={style.field}>
                <label htmlFor="fontColor">Font color</label>
                <input
                    type="color"
                    id="fontColor"
                    {...register("fontColor", {required: "Choose font color"})}
                />
                {errors.fontColor && <p className={style.error}>{errors.fontColor.message}</p>}
            </div>

            <div className={style.field}>
                <label htmlFor="fontSize">Font size</label>
                <input
                    type="number"
                    id="fontSize"
                    {...register("fontSize", {
                        required: "Enter font size",
                        validate: (value) => {
                            const size = Number(value);
                            if (Number.isNaN(size)) return "Size must be a number";
                            if (size < 8 || size > 100) return "Size must be between 8 and 100";
                            return true;
                        },
                    })}
                />
                {errors.fontSize && <p className={style.error}>{errors.fontSize.message}</p>}
            </div>

            <div className={style.field}>
                <label htmlFor="titleBackground">Title background</label>
                <input
                    type="color"
                    id="titleBackground"
                    {...register("titleBackground", {required: "Choose title background"})}
                />
                {errors.titleBackground && <p className={style.error}>{errors.titleBackground.message}</p>}
            </div>

            <div className={style.field}>
                <label htmlFor="authorNameBackground">Author name background</label>
                <input
                    type="color"
                    id="authorNameBackground"
                    {...register("authorNameBackground", {required: "Choose author name background"})}
                />
                {errors.authorNameBackground &&
                    <p className={style.error}>{errors.authorNameBackground.message}</p>}
            </div>

            <div className={style.field}>
                <label htmlFor="textBackground">Text background</label>
                <input
                    type="color"
                    id="textBackground"
                    {...register("textBackground", {required: "Choose text background"})}
                />
                {errors.textBackground && <p className={style.error}>{errors.textBackground.message}</p>}
            </div>

            <div className={style.field}>
                <label htmlFor="dateBackground">Date background</label>
                <input
                    type="color"
                    id="dateBackground"
                    {...register("dateBackground", {required: "Choose date background"})}

                />
                {errors.dateBackground && <p className={style.error}>{errors.dateBackground.message}</p>}
            </div>

            <div className={style.field}>
                <label htmlFor="articleImage">Article image</label>
                <input
                    type="text"
                    id="articleImage"
                    placeholder="Paste image URL"
                    {...register("articleImage", {
                        required: "Enter image URL",
                        validate: (value) =>
                            /^(https?:\/\/|data:image\/)/i.test(value)
                            || "Enter a valid image URL",
                    })}
                />
                {errors.articleImage && <p className={style.error}>{errors.articleImage.message}</p>}
                {articleImage && !errors.articleImage && (
                    <img className={style.image} src={articleImage} alt="Article"/>
                )}
            </div>

            <div className={style.field}>
                <label htmlFor="articleTitleAlign">Article title align</label>
                <select
                    id="articleTitleAlign"
                    {...register("articleTitleAlign", {required: "Choose title alignment"})}
                >
                    <option value="">Select alignment</option>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                    <option value="justify">Justify</option>
                </select>
                {errors.articleTitleAlign &&
                    <p className={style.error}>{errors.articleTitleAlign.message}</p>}
            </div>
            <div className={style.field}>
                <label htmlFor="authorNameAlign">Article author align</label>
                <select
                    id="authorNameAlign"
                    {...register("authorNameAlign", {required: "Choose author alignment"})}
                >
                    <option value="">Select alignment</option>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                    <option value="justify">Justify</option>
                </select>
                {errors.authorNameAlign && <p className={style.error}>{errors.authorNameAlign.message}</p>}
            </div>
            <div className={style.field}>
                <label htmlFor="articleTextAlign">Article text align</label>
                <select
                    id="articleTextAlign"
                    {...register("articleTextAlign", {required: "Choose text alignment"})}
                >
                    <option value="">Select alignment</option>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                    <option value="justify">Justify</option>
                </select>
                {errors.articleTextAlign && <p className={style.error}>{errors.articleTextAlign.message}</p>}
            </div>
            <div className={style.field}>
                <label htmlFor="articleDateAlign">Article date align</label>
                <select
                    id="articleDateAlign"
                    {...register("articleDateAlign", {required: "Choose date alignment"})}
                >
                    <option value="">Select alignment</option>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                    <option value="justify">Justify</option>
                </select>
                {errors.articleDateAlign && <p className={style.error}>{errors.articleDateAlign.message}</p>}
            </div>
            <div className={style.field}>
                <label htmlFor="articleImageAlign">Article image align</label>
                <select
                    id="articleImageAlign"
                    {...register("articleImageAlign", {required: "Choose image alignment"})}
                >
                    <option value="">Select alignment</option>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
                {errors.articleImageAlign && <p className={style.error}>{errors.articleImageAlign.message}</p>}
            </div>
            <div className={style.field}>
                <label htmlFor="articleAlign">Article align</label>
                <select
                    id="articleAlign"
                    {...register("articleAlign", {required: "Choose article alignment"})}
                >
                    <option value="">Select alignment</option>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                    <option value="justify">Justify</option>
                </select>
                {errors.articleAlign && <p className={style.error}>{errors.articleAlign.message}</p>}
            </div>


            <button type="submit">Save</button>
        </form>
    )
}
export default ArticleForm