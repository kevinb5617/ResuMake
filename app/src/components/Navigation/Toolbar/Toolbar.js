import Logo from '../../Logo/Logo'
import classes from './Toolbar.module.css'


const Toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <Logo/>
        </header>
    )
}

export default Toolbar