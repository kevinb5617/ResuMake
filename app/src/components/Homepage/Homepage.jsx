import { Link } from 'react-router-dom'
import classes from './Homepage.module.css'

// The homepage is simply a button that brings the user to the page selection route
const Homepage = () => (
  <Link to="select-pages/">
    <button type="button" className={classes.StartBtn}>
      get started
    </button>
  </Link>
)

export default Homepage
