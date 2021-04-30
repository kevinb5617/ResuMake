import resumakeLogo from '../../assets/images/logo.png'
import classes from './Logo.module.css'

/**
 * This object simply renders the logo in the header of the website
 */
const Logo = () => (
  <div className={classes.Logo}>
    <img src={resumakeLogo} alt="ResuMake" />
  </div>
)

export default Logo
