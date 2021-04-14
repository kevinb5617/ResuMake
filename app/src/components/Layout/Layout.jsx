import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = () => {
  const clicked = () => {
    // eslint-disable-next-line no-alert
    alert('clicked')
  }
  return (
    <>
      <Toolbar />
      <button type="button" onClick={() => clicked()} className={classes.StartBtn}>get started</button>
    </>
  )
}

export default Layout
