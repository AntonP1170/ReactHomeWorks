import {useState} from "react";
import style from "../UseStatePage.module.css"
import Restaurant, {type IRestaurantInfo} from "@/Pages/UseStatePage/homework/Restaurant/Restaurant.tsx";
import LogIn, {type IUserInfo} from "@/Pages/UseStatePage/homework/LogIn/LogIn.tsx";

const UseStatePageHomework = () => {
    const [restaurant, setRestaurant] = useState<IRestaurantInfo>({
        name: "Пузата Хата",
        address: "вул. Хрещатик, 1, Київ",
        rating: "4.5",
        typeOfFood: "Українська кухня",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYD-1OZUWfb--NCDuaC7ZL0VFnBacJc50S8I6duqblWg&s=10",
    });
    const [user, setUser] = useState<IUserInfo>({
        login: "Anton",
        password: "Anton12345",
    })

    return (
        <div className="container">
            <div className={style.UseStatePageContent}>
                <h2>Task 1-2</h2>
                <Restaurant state={restaurant} setState={setRestaurant}/>
                <h2>Task 3</h2>
                <LogIn state={user} setState={setUser}/>
            </div>
        </div>
    )
}
export default UseStatePageHomework
