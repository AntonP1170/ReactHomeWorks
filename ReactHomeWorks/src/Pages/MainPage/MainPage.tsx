import style from "./MainPage.module.css";
import Card from "@/Components/Card/Card.tsx";

const MainPage = () => {
    return (
        <>
            <main className={style.CardContainer}>
                <div className="container">
                    <div className={style.CardContainer}>
                        <Card
                            img={
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAntkKuhyqUvSo4J7KKxH6eOeM3okcHmog16tetOqjkg&s=10"
                            }
                            status={"done"}
                            path={"/enter-to-react"}
                            title={"Enter to React"}
                        />
                        <Card
                            img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeu-at2_ExFfp4Mnw8JLtNjlyocrE5frXjtQQA31h3w&s=10"}
                            status={"done"}
                            path={"/react-components"}
                            title={"React Components"}
                        />
                        <Card
                            img={"https://www.telerik.com/sfimages/default-source/blogs/2023/2023-01/usestate_breakdown.png?sfvrsn=45263ccd_3"}
                            status={"in progress"}
                            path={"/react-usestate"}
                            title={"React useState"}
                        />
                    </div>
                </div>
            </main>
        </>
    );
};
export default MainPage;
