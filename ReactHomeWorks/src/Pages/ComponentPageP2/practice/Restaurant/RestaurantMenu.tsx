import style from "./RestaurantMenu.module.css";

interface Dish {
    name: string;
    price: number;
    ingredients: string[];
}

interface MenuSection {
    title: string;
    dishes: Dish[];
}

interface RestaurantMenuProps {
    restaurant: string;
    sections: MenuSection[];
}

const RestaurantMenu = ({restaurant, sections}: RestaurantMenuProps) => {
    return (
        <section className={style.menu}>
            <h3>{restaurant}</h3>

            {sections.map((section) => (
                <div className={style.section} key={section.title}>
                    <h4>{section.title}</h4>
                    <ul className={style.dishList}>
                        {section.dishes.map((dish) => (
                            <li className={style.dish} key={dish.name}>
                                <div className={style.dishHeader}>
                                    <strong>{dish.name}</strong>
                                    <span>{dish.price} грн</span>
                                </div>
                                <p>Інгредієнти: {dish.ingredients.join(", ")}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}

export default RestaurantMenu;
