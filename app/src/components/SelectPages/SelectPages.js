import classes from './SelectPages.module.css'

const SelectPages = () => {
  return (
    <>
      <h2>
        What pages would you like?
      </h2>
      <div className={classes.container}>
        <label className={classes.pageItem}>
          <input type='checkbox' onChange={(e) => console.log("HEY")}/>
          <span className={classes.checkmark}/>
          <span className={classes.pageLabel}>About Me</span>
        </label>
        <label className={classes.pageItem}>
          <input type='checkbox' />
          <span className={classes.checkmark}/>
          <span className={classes.pageLabel}>Resume</span>
        </label>
        <label className={classes.pageItem}>
          <input type='checkbox' />
          <span className={classes.checkmark}/>
          <span className={classes.pageLabel}>Embedded Terminal</span>
        </label>
      </div>
    </>
  )
}

export default SelectPages
