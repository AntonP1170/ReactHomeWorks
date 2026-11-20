import style from "./BlogPosts.module.css";

interface BlogPost {
    title: string;
    text: string;
    date: string;
    tags: string[];
}

interface BlogPostsProps {
    author: string;
    posts: BlogPost[];
}

const BlogPosts = ({author, posts}: BlogPostsProps) => {
    return (
        <section className={style.blog}>
            <h3>Блог: {author}</h3>

            {posts.map((post) => (
                <article className={style.post} key={post.title}>
                    <h4>{post.title}</h4>
                    <time className={style.date} dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("uk-UA")}
                    </time>
                    <p>{post.text}</p>
                    <ul className={style.tagList}>
                        {post.tags.map((tag) => (
                            <li className={style.tag} key={tag}>#{tag}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </section>
    )
}

export default BlogPosts;
