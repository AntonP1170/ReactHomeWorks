import {useKeenSlider} from "keen-slider/react";
import style from "./Carousel.module.css";

type photoObj = {
    src: string,
    alt: string,
}

interface Props {
    photos: photoObj[]
}

const Carousel = ({photos}: Props) => {
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
        <div className={style.carouselContainer}>
            <div ref={slideRef} className="keen-slider">
                {photos.map((photo) => (
                    <div className="keen-slider__slide" key={photo.src}>
                        <img className={style.image} src={photo.src} alt={photo.alt}/>
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
export default Carousel