import { Component, type ReactNode } from "react";
import style from "../EnterToReactPage.module.css";

class EtrHomeworkClassBook extends Component {
  render(): ReactNode {
    return (
      <ul>
        <li>Book title:Грокаємо алгоритми</li>
        <li>Author:Адітья Бхаргава</li>
        <li>Author:Адітья Бхаргава</li>
        <li>Genre:Навчальна / комп’ютерна / технічна література</li>
        <li>Pages:256–272 сторінки</li>
        <li>
          <ul>
            Reviews:
            <li>
              The best book I've ever read on algorithms. Also the only book
              I've ever read on algorithms, but probably for a good reason.
            </li>
            <li>
              I absolutely love the author's visual approach to teaching
              algorithms. Coupled with a plethora of examples, the bite-sized
              chapters in this book are ideal for people like me to follow. I
              would highly recommend this book not only to beginners, but also
              to experienced developers who want to refresh their algorithms
              knowledge and ultimately, make it stick.
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default EtrHomeworkClassBook