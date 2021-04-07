import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = () => {
    const clicked = () => {
        alert("clicked")
    }
    return (
        <>
            <Toolbar/>
            <button onClick={() => clicked() } className={classes.StartBtn}>get started</button>
        </>
    )
}

export default Layout