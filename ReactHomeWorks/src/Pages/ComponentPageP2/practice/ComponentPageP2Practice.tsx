import ImageForm from "@/Pages/ComponentPageP2/practice/ImageFrom/ImageForm.tsx";
import Company from "@/Pages/ComponentPageP2/practice/Company/Company.tsx";
import Faculty from "@/Pages/ComponentPageP2/practice/Faculty/Faculty.tsx";
import RestaurantMenu from "@/Pages/ComponentPageP2/practice/Restaurant/RestaurantMenu.tsx";

const epamEmployees = [
    {name: "Андрій Коваленко", position: "Frontend Developer", experience: 5},
    {name: "Олена Шевченко", position: "Backend Developer", experience: 7},
    {name: "Марія Бондар", position: "QA Engineer", experience: 3},
    {name: "Ігор Ткаченко", position: "Project Manager", experience: 9},
];

const facultyGroups = [
    {
        name: "КН-241",
        specialty: "Комп'ютерні науки",
        students: [
            {fullName: "Ірина Мельник", course: 2},
            {fullName: "Тарас Гриценко", course: 2},
            {fullName: "Софія Литвин", course: 2},
        ],
    },
    {
        name: "КН-242",
        specialty: "Комп'ютерні науки",
        students: [
            {fullName: "Дмитро Романюк", course: 2},
            {fullName: "Анастасія Ковач", course: 2},
        ],
    },
    {
        name: "КН-341",
        specialty: "Програмна інженерія",
        students: [
            {fullName: "Марко Савчук", course: 3},
            {fullName: "Юлія Демченко", course: 3},
        ],
    },
];

const restaurantSections = [
    {
        title: "Салати",
        dishes: [
            {
                name: "Цезар",
                price: 189,
                ingredients: ["куряче філе", "салат романо", "пармезан", "сухарики", "соус цезар"]
            },
            {name: "Грецький", price: 165, ingredients: ["огірки", "томати", "фета", "оливки", "цибуля"]},
        ],
    },
    {
        title: "Закуски",
        dishes: [
            {
                name: "Брускетта з томатами",
                price: 129,
                ingredients: ["хліб", "томати", "часник", "оливкова олія", "базилік"]
            },
            {name: "Картопля фрі", price: 99, ingredients: ["картопля", "рослинна олія", "сіль"]},
        ],
    },
    {
        title: "Супи",
        dishes: [
            {name: "Борщ", price: 139, ingredients: ["буряк", "капуста", "картопля", "м'ясо", "сметана"]},
            {name: "Крем-суп із грибів", price: 149, ingredients: ["печериці", "вершки", "цибуля", "картопля"]},
        ],
    },
    {
        title: "Основні страви",
        dishes: [
            {name: "Паста Карбонара", price: 229, ingredients: ["спагеті", "бекон", "жовтки", "пармезан", "перець"]},
            {name: "Курячий стейк", price: 259, ingredients: ["куряче філе", "картопля", "броколі", "соус"]},
        ],
    },
    {
        title: "Десерти",
        dishes: [
            {name: "Чизкейк", price: 159, ingredients: ["сир маскарпоне", "печиво", "яйця", "цукор", "ягоди"]},
        ],
    },
];

const ComponentPageP2Practice = () => {
    return (
        <>
            <h2>Task 1</h2>
            <ImageForm/>
            <h2>Task 2</h2>
            <Company
                name="EPAM Systems"
                founded={1993}
                headquarters="Ньютаун, Пенсільванія, США"
                description="Глобальна компанія, що займається розробкою програмного забезпечення та цифрових продуктів."
                employees={epamEmployees}
            />
            <h2>Task 3</h2>
            <Faculty
                name="Факультет комп'ютерних наук та інформаційних технологій"
                university="Національний університет"
                dean="Професор Олег Захаренко"
                groups={facultyGroups}
            />
            <h2>Task 4</h2>
            <RestaurantMenu restaurant="Ресторан «Смак»" sections={restaurantSections}/>
        </>
    )
}
export default ComponentPageP2Practice;
