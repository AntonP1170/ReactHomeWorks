import style from "./Header.module.css"
import {NavLink} from "react-router";
import useNameStore from "@/hooks/useNameStore.ts";
import {useShallow} from "zustand/react/shallow";
import {useEffect} from "react";

const Header = () => {
    const {name, setName} = useNameStore(useShallow((state) => ({name: state.name, setName: state.setName})));
    useEffect(() => {
        console.log("header render");
    }, [])
    return (
        <header className={style.header}>
            <div className={"container"}>
                <div className={style.headerContent}>
                    <NavLink to={"/"} className={style.headerNavLink} onClick={() => setName(null)}
                             replace>Homeworks</NavLink>
                    <h3>{name}</h3>
                </div>
            </div>
        </header>
    )
}
export default Header