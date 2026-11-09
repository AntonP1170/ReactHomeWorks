import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import style from "./MyPet.module.css";

const images = [
    "/image.jpg",
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg",
];

interface MyPetProps {
    habits: string[];
}

const MyPet = ({habits}: MyPetProps) => {
    const [slideRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {perView: 1.15, spacing: 16},
        breakpoints: {
            "(min-width: 700px)": {
                slides: {perView: 2.15, spacing: 20},
            },
            "(min-width: 1024px)": {
                slides: {perView: 2.7, spacing: 24},
            },
        },
    })

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
            <div ref={slideRef} className="keen-slider">
                {images.map((src) => (
                    <div className="keen-slider__slide" key={src}>
                        <img className={style.image} src={src} alt="Шуршик"/>
                    </div>
                ))}
            </div>
            <button
                type="button"
                className={`${style.arrow} ${style.arrowLeft}`}
                onClick={() => instanceRef.current?.prev()}
                aria-label="Попереднє фото"
            >
                ‹
            </button>
            <button
                type="button"
                className={`${style.arrow} ${style.arrowRight}`}
                onClick={() => instanceRef.current?.next()}
                aria-label="Наступне фото"
            >
                ›
            </button>
        </div>
    )
}
export default MyPet
