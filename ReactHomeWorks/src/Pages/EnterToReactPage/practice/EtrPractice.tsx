import "keen-slider/keen-slider.min.css";
import style from "../EnterToReactPage.module.css";
import Carousel from "@/Components/Carousel/Carousel.tsx";
import EtrHomeworkClassHello from "./EtrPracticeClassHello";

const reactPhotos = [
  {
    src: "https://miro.medium.com/v2/resize:fit:1400/1*-l9HwOuRs0pXB7WFydrFOw.png",
    alt: "react",
  },
];

const EtrPractice = () => {
  return (
    <div className={style.PracticeContent}>
      <h2>Task 1</h2>
      <Carousel photos={reactPhotos} />
      <div className={style.advantagesListsContainer}>
        <div>
          <h3>Advantages</h3>
          <ul>
            <li>Компонентний підхід</li>
            <li>Висока продуктивність</li>
            <li>Повторне використання коду</li>
            <li>Велика спільнота</li>
            <li>Гнучкість</li>
            <li>Зручність розробки</li>
            <li>Популярність на ринку праці</li>
          </ul>
        </div>
        <div>
          <h3>Disadvantages</h3>
          <ul>
            <li>Потребує знання JavaScript</li>
            <li>Складність для початківців</li>
            <li>Швидкі зміни</li>
            <li>Додаткові бібліотеки</li>
            <li>SEO-особливості</li>
            <li>Велика кількість інструментів</li>
          </ul>
        </div>
      </div>
      <h2>Task 2</h2>
      <h3>Hello,World</h3>
      <h2>Task 3</h2>
      <EtrHomeworkClassHello />
      <h2>Task 4</h2>
      <ul>
        <li>ПІБ:Паршук Антон Павлович</li>
        <li>Телефон:0932209676</li>
        <li>Пошта:parsukanton80@gmail.com</li>
      </ul>
    </div>
  );
};

export default EtrPractice;
