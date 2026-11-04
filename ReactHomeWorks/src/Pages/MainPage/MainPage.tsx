import style from "./MainPage.module.css";
import Card from "@/Components/Card/Card.tsx";

const MainPage = () => {


    return (
        <>
            <main className={style.CardContainer}>
                <div className="container">
                    <div className={style.CardContainer}>
                        <Card img={"none"}
                              status={"in progress"}
                              path={"/homework/react-components"}
                              title={"React Components"}/>
                    </div>
                </div>
            </main>
        </>
    )
}
export default MainPage;