import style from "./MainPage.module.css";
import Card from "@/Components/Card/Card.tsx";

const MainPage = () => {


    return (
        <>
            <main className={style.CardContainer}>
                <div className="container">
                    <div className={style.CardContainer}>
                        <Card img={"none"}
                              status={"available"}
                              path={"/homework/enter-to-react"}
                              title={"Enter to React"}/>
                    </div>
                </div>
            </main>
        </>
    )
}
export default MainPage;