import classes from './SelectPages.module.css'

const SelectPages = () => {
  return (
    <>
      <h2>
        What pages would you like?
      </h2>
      <div className={classes.pageItem}>
        <input type='checkbox' />
        <h3>
          About Me
        </h3>
      </div>
      <div className={classes.pageItem}>
        <input type='checkbox' />
        <h3>
          Resume
        </h3>
      </div>
      <div className={classes.pageItem}>
        <input type='checkbox' />
        <h3>
          Embedded Terminal
        </h3>
      </div>
    </>
  )
}

export default SelectPages
