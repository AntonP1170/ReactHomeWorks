interface MovieProps {
    title: string;
    director: string;
    year: number;
    studio: string;
    poster: string;
}

const FavoriteMovie = ({title, director, year, studio, poster}: MovieProps) => {
    return (
        <div>
            <img src={poster} alt={title} width={250}/>
            <h2>{title}</h2>
            <p>Режисер: {director}</p>
            <p>Рік випуску: {year}</p>
            <p>Кіностудія: {studio}</p>
        </div>
    );
}
export default FavoriteMovie;