import classes from './Homepage.module.css'

import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <Link to='select-pages/'>
      <button className={classes.StartBtn}>
        get started
      </button>
    </Link>
  )
}

export default Homepage