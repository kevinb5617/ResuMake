import { Link } from 'react-router-dom'
import classes from './Button.module.css'

const Button = ({ nextPage, type, text }) => {
  let returnLink

  switch (type) {
    case 'next':
      returnLink = (
        <Link to={nextPage}>
          <button type="button" className={`${classes.btn} ${classes.next_btn}`}>
            {text}
          </button>
        </Link>
      )
      break
    case 'back':
      returnLink = (
        <Link to={nextPage}>
          <button type="button" className={`${classes.btn} ${classes.back_btn}`}>
            {text}
          </button>
        </Link>
      )
      break
    default:
      returnLink = null
  }

  return returnLink
}

export default Button
