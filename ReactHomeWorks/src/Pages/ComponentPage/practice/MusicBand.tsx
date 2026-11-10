import "keen-slider/keen-slider.min.css";
import Carousel from "@/Components/Carousel/Carousel.tsx";

const albumImages = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3Tl8SeWT__EfIdt0coYj7V6xFgsN9sCcMStDfvJrrQ&s=10",
    alt: "bleach",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtU_y0C81RYbg6A9eTEykqIBHRfAkvoSUkBLiKd7ldA&s=10",
    alt: "Nevermind",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxP6wsH0UsWvx0HvT7BLQqnH6s4t_BhUma3qxZyYFIg&s",
    alt: "In Utero",
  },
];

const MusicBand = () => {
  return (
    <ul>
      <li>Music band name:Nirvana</li>
      <li>
        <ul>
          <h4>Group members:</h4>
          <li>Курт Кобейн</li>
          <li>Дейв Грол</li>
          <li>Кріст Новоселіч</li>
        </ul>
      </li>
      <li>
        <h4>Album names:</h4>
        <ul>
          <li>Bleach</li>
          <li>Nevermind</li>
          <li>In Utero</li>
        </ul>
      </li>
      <li>
        <h4>Album pictures:</h4>
        <Carousel photos={albumImages} />
      </li>
    </ul>
  );
};

export default MusicBand;