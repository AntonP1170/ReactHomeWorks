import style from "./Header.module.css"
import {NavLink} from "react-router";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={"container"}>
                <div className={style.headerContent}>
                    <NavLink to={"/"} className={style.headerNavLink}>Homeworks</NavLink>
                    <h3>Name of assignment</h3>
                </div>
            </div>
        </header>
    )
}
export default Header