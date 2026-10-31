import {NavLink} from "react-router";
import style from "./Card.module.css";
import useNameStore from "@/hooks/useNameStore.ts";
import {useEffect, useState} from "react";

interface CardProps {
    title: string;
    img: string;
    path: string;
    status: string;
}

const Card = ({path, title, img, status}: CardProps) => {
    const setName = useNameStore(state => state.setName);
    const [border, setBorder] = useState<string>("")
    useEffect(() => {
            if (status === "done") {
                setBorder("#22c55e")
            } else if (status === "in progress") {
                setBorder("#f59e0b");
            } else {
                setBorder("#3b82f6")
            }
        }
        , [])
    return (
        <NavLink to={path} onClick={() => setName(title)} replace>
            <div className={style.card} style={{border: `1px solid ${border}`}}>
                <img src={img} alt="task image" className={style.cardImage}/>
                <h3 className={style.cardTitle}>{title}</h3>
            </div>
        </NavLink>
    )
}
export default Card;