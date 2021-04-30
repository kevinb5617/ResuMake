import { Link } from 'react-router-dom'
import classes from './Button.module.css'

const Button = ({ nextPage, type, text }) => {
  let returnLink

  /**
   * There are two main button types
   *
   * next: Used to navigate to the "next" page (move through info input pages)
   * back: Used to navigate to the "previous" page
   */
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
