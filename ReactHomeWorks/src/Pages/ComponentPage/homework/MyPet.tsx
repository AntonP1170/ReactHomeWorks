import "keen-slider/keen-slider.min.css";
import style from "./MyPet.module.css";
import Carousel from "@/Components/Carousel/Carousel.tsx";

const images = [
    {src: "/image.jpg", alt: "Шуршик1"},
    {src: "/image1.jpg", alt: "Шуршик2"},
    {src: "/image2.jpg", alt: "Шуршик3"},
    {src: "/image3.jpg", alt: "Шуршик4"},
    {src: "/image4.jpg", alt: "Шуршик5"},
    {src: "/image5.jpg", alt: "Шуршик6"},
    {src: "/image6.jpg", alt: "Шуршик7"}
];

interface MyPetProps {
    habits: string[];
}

const MyPet = ({habits}: MyPetProps) => {

    return (
        <div className={style.wrapper}>
            <ul>
                <li>Тварина:Шиншила</li>
                <li>Ім'я:Шуршик</li>
                <li>Вік:6 місяців</li>
                <li>Улюблена їжа:яблучна сушка,гілочки</li>
                <li>
                    <span>Улюблені речі:</span>
                    <ul>
                        {habits.map((el, index) => <li key={index}>{el}</li>)}
                    </ul>
                </li>

            </ul>
            <Carousel photos={images}/>
        </div>
    )
}
export default MyPet
