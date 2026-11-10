import GithubSvg from "@/Svg/GithubSvg/GithubSvg.tsx";
import style from "./Footer.module.css";
import {NavLink} from "react-router";

const Footer = () => {
    return (
        <footer>
            <div className={style.footerContent}>
                <h2>For more information visit github repo</h2>
                <NavLink to="https://github.com/AntonP1170/ReactHomeWorks">
                    <GithubSvg/>
                </NavLink>
            </div>
        </footer>
    )
}
export default Footer;