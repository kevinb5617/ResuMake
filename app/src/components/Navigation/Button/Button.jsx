import { Link } from 'react-router-dom'
import classes from './Button.module.css'

const Button = ({ nextPage, type, text }) => {
  switch (type) {
    case 'next':
      return (
        <Link to={nextPage}>
          <button type="button" className={`${classes.btn} ${classes.next_btn}`}>
            {text}
          </button>
        </Link>
      )
    case 'back':
      return (
        <Link to={nextPage}>
          <button type="button" className={`${classes.btn} ${classes.back_btn}`}>
            {text}
          </button>
        </Link>
      )
    default:
  }
}

export default Button
