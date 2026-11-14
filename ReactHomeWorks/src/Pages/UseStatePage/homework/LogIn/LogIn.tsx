import {useState} from "react";

export interface IUserInfo {
    login: string;
    password: string;
}

interface ILogInProps {
    state: IUserInfo;
    setState: (state: IUserInfo) => void;
}

const LogIn = ({state, setState}: ILogInProps) => {
    const [mode, setMode] = useState<string>("view");

    const changeInfo = (field: keyof IUserInfo, value: string) => {
        setState({...state, [field]: value});
    }
    return (
        <div>
            {mode === "view" ? (
                <div>
                    <h2>
                        Login: {state.login}
                    </h2>
                    <h2>Password:{state.password}</h2>
                    <button onClick={() => setMode("edit")}>Редагувати</button>
                </div>
            ) : (
                <div>
                    <label htmlFor="login">Login:</label>
                    <input type="text" id="login" onChange={(e) => changeInfo("login", e.target.value)}/>
                    <br/>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" onChange={(e) => changeInfo("password", e.target.value)}/>
                    <br/>
                    <button onClick={() => setMode("view")}>Зберегти</button>
                </div>
            )}
        </div>
    )
}
export default LogIn;