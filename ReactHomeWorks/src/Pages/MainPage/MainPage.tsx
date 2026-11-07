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
          </div>
        </div>
      </main>
    </>
  );
};
export default MainPage;
