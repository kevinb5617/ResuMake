import resumakeLogo from '../../assets/images/logo.png'
import classes from './Logo.module.css'

const Logo = () => (
  <div className={classes.Logo}>
    <img src={resumakeLogo} alt="ResuMake" />
  </div>
)

export default Logo
