import Logo from '../../Logo/Logo'
import classes from './Toolbar.module.css'

/**
 * Toolbar just renders a header with the logo and gradient background
 * on every page.
 */
const Toolbar = () => (
  <header className={classes.Toolbar}>
    <Logo />
  </header>
)

export default Toolbar;
