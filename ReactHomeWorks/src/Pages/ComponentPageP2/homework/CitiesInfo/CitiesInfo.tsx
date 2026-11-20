import style from "./CitiesInfo.module.css";

interface City {
    name: string;
    description: string;
    coatOfArms: string;
    population: number;
    area: number;
}

interface CitiesInfoProps {
    country: string;
    cities: City[];
}

const CitiesInfo = ({country, cities}: CitiesInfoProps) => {
    return (
        <section className={style.cities}>
            <h3>Країна: {country}</h3>

            {cities.map((city) => (
                <article className={style.city} key={city.name}>
                    <img className={style.coat} src={city.coatOfArms} alt={`Герб міста ${city.name}`}/>
                    <div className={style.cityInfo}>
                        <h4>{city.name}</h4>
                        <p>{city.description}</p>
                        <dl className={style.facts}>
                            <div>
                                <dt>Кількість жителів</dt>
                                <dd>{city.population.toLocaleString("uk-UA")}</dd>
                            </div>
                            <div>
                                <dt>Площа</dt>
                                <dd>{city.area.toLocaleString("uk-UA")} км²</dd>
                            </div>
                        </dl>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default CitiesInfo;
