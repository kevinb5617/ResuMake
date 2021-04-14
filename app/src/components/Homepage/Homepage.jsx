import { Link } from 'react-router-dom'
import classes from './Homepage.module.css'

const Homepage = () => (
  <Link to="select-pages/">
    <button type="button" className={classes.StartBtn}>
      get started
    </button>
  </Link>
)

export default Homepage
