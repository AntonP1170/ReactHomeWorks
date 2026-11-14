import {useState} from "react";


export interface IRestaurantInfo {
    name: string;
    address: string;
    rating: string;
    typeOfFood: string;
    img: string;
}

interface IRestaurantProps {
    state: IRestaurantInfo;
    setState: (state: IRestaurantInfo) => void;
}

const Restaurant = ({state, setState}: IRestaurantProps) => {
    const [mode, setMode] = useState<string>("view");

    const changeField = (field: keyof IRestaurantInfo, value: string) => {
        setState({...state, [field]: value});
    };

    return (
        <div>
            {mode === "view" ? (
                <div>
                    <img src={state.img} alt={state.name} width={200}/>
                    <h2>{state.name}</h2>
                    <p>Адреса: {state.address}</p>
                    <p>Рейтинг: {state.rating}</p>
                    <p>Тип їжі: {state.typeOfFood}</p>
                    <button onClick={() => setMode("edit")}>Редагувати</button>
                </div>
            ) : (
                <div>
                    <label>
                        Назва:
                        <input value={state.name} onChange={(e) => changeField("name", e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Адреса:
                        <input value={state.address} onChange={(e) => changeField("address", e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Рейтинг:
                        <input value={state.rating} onChange={(e) => changeField("rating", e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Тип їжі:
                        <input value={state.typeOfFood} onChange={(e) => changeField("typeOfFood", e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Картинка:
                        <input value={state.img} onChange={(e) => changeField("img", e.target.value)}/>
                    </label>
                    <br/>
                    <button onClick={() => setMode("view")}>Зберегти</button>
                </div>
            )}
        </div>
    )
}
export default Restaurant
