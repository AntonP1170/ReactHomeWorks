import style from "./CinemaSchedule.module.css";

interface Session {
    time: string;
    hall: string;
    format: string;
    price: number;
}

interface Film {
    title: string;
    description: string;
    poster: string;
    sessions: Session[];
}

interface CinemaScheduleProps {
    cinema: string;
    films: Film[];
}

const CinemaSchedule = ({cinema, films}: CinemaScheduleProps) => {
    return (
        <section className={style.schedule}>
            <h3>{cinema}</h3>

            {films.map((film) => (
                <article className={style.film} key={film.title}>
                    <img className={style.poster} src={film.poster} alt={`Афіша фільму ${film.title}`}/>
                    <div className={style.filmInfo}>
                        <h4>{film.title}</h4>
                        <p>{film.description}</p>
                        <h5>Сеанси</h5>
                        <ul className={style.sessionList}>
                            {film.sessions.map((session) => (
                                <li key={`${film.title}-${session.time}-${session.hall}`}>
                                    <strong>{session.time}</strong>
                                    <span>Зал {session.hall}</span>
                                    <span>{session.format}</span>
                                    <span>{session.price} грн</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default CinemaSchedule;
