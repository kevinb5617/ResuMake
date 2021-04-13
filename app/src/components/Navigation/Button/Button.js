import classes from "./Button.module.css"

import { Link } from "react-router-dom"

const Button = ({ nextPage, type, text }) => {
    switch (type) {
        case "next":
            return (
                <Link to={nextPage}>
                    <button className={`${classes.btn} ${classes.next_btn}`}>
                        {text}
                    </button>
                </Link>
            )
        case "back":
            return (
                <Link to={nextPage}>
                    <button className={`${classes.btn} ${classes.back_btn}`}>
                        {text}
                    </button>
                </Link>
            )
        default:
    }
}

export default Button
