import CinemaSchedule from "@/Pages/ComponentPageP2/homework/CinemaSchedule/CinemaSchedule.tsx";
import BlogPosts from "@/Pages/ComponentPageP2/homework/BlogPost/BlogPosts.tsx";
import CitiesInfo from "@/Pages/ComponentPageP2/homework/CitiesInfo/CitiesInfo.tsx";

const films = [
    {
        title: "Месники: Сходження Доктора Дума",
        description: "Герої з трьох різних світів змушені об'єднатися, коли доля зводить їх разом, щоб протистояти катастрофічній загрозі, здатній знищити все, що вони знають...",
        poster: "https://kino-teatr.ua/public/main/films/2026-08/x2_poster_54117_6a7ff2da7d9f4.jpg",
        sessions: [
            {time: "12:30", hall: "1", format: "2D", price: 120},
            {time: "16:00", hall: "2", format: "2D", price: 150},
            {time: "19:45", hall: "1", format: "2D", price: 180},
        ],
    },
    {
        title: "Дюна: Частина третя",
        description: "«Дюна: Частина третя» заснована на романі «Месія Дюни» Френка Герберта та стане епічним завершенням трилогії Дені Вільньова.",
        poster: "https://kino-teatr.ua/public/main/films/2026-07/x2_poster_57422_6a4f5de59297e.jpg",
        sessions: [
            {time: "13:15", hall: "3", format: "3D", price: 180},
            {time: "18:20", hall: "3", format: "3D", price: 220},
        ],
    },
    {
        title: "Angry Birds у кіно 3",
        description: "Цього святкового сезону на одного дуже сердитого птаха чекає його найбільше випробування — пережити батьківство… і водночас урятувати світ!.",
        poster: "https://kino-teatr.ua/public/main/films/2026-07/x2_poster_6a509c98addfc.jpg",
        sessions: [
            {time: "11:00", hall: "2", format: "2D", price: 110},
            {time: "15:40", hall: "2", format: "2D", price: 150},
            {time: "20:10", hall: "1", format: "2D", price: 180},
        ],
    },
];

const posts = [
    {
        title: "Олександрія: парк, який варто побачити",
        text: "У Білій Церкві найбільше враження справляє дендрологічний парк Олександрія: старі дерева, ставки та тихі алеї.",
        date: "2026-05-12",
        tags: ["Біла Церква", "подорожі", "парк"],
    },
    {
        title: "Історична Біла Церква",
        text: "Місто на Росі відоме своїм минулим: тут зберігається пам'ять про козацькі часи та старовинні храми.",
        date: "2026-04-28",
        tags: ["історія", "місто", "Україна"],
    },
    {
        title: "Київські враження",
        text: "Столиця України поєднує сучасний ритм і багатовікову історію: музеї, парки та види на Дніпро.",
        date: "2026-03-15",
        tags: ["Київ", "Україна", "місто"],
    },
];

const cities = [
    {
        name: "Біла Церква",
        description: "Місто в Київській області на річці Рось, відоме парком Олександрія та історичними пам'ятками.",
        coatOfArms: "data:image/png;base64,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",
        population: 203000,
        area: 67.3,
    },
    {
        name: "Київ",
        description: "Столиця України, найбільше місто країни на берегах Дніпра з багатою історією та культурою.",
        coatOfArms: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShicbkQrIAxejxlq8QBW9D06Xr9Y_gh5AlmBZKBIOicQ&s=10",
        population: 2950000,
        area: 847,
    },
    {
        name: "Львів",
        description: "Історичний центр на заході України, відомий архітектурою, кавою та музеями.",
        coatOfArms: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhzim17-mbl6UfHChAmeByUodh46UNC_wS7tHEjYeGfw&s=10",
        population: 717000,
        area: 182,
    },
];

const ComponentPageP2Homework = () => {
    return (
        <>
            <h2>Task 1</h2>
            <CinemaSchedule cinema="Кінотеатр «Біла Церква»" films={films}/>
            <h2>Task 2</h2>
            <BlogPosts author="Мандри Україною" posts={posts}/>
            <h2>Task 3</h2>
            <CitiesInfo country="Україна" cities={cities}/>
        </>
    )
}

export default ComponentPageP2Homework;
