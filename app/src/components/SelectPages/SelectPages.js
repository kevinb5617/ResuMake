import classes from './SelectPages.module.css'

import { useState } from 'react'

const SelectPages = () => {
  const [aboutMe, setAboutMe] = useState(false)
  const [resume, setResume] = useState(false)
  const [projects, setProjects] = useState(false)
  const [terminal, setTerminal] = useState(false)

  return (
    <>
      <h2>
        What pages would you like?
      </h2>
      <div className={classes.container}>
        <label className={classes.pageItem}>
          <input type='checkbox' onChange={(e) => setAboutMe(!aboutMe)}/>
          <span className={classes.checkmark}/>
          <span className={classes.pageLabel}>About Me</span>
        </label>
        <label className={classes.pageItem}>
          <input type='checkbox' onChange={(e) => setResume(!resume)}/>
          <span className={classes.checkmark}/>
          <span className={classes.pageLabel}>Resume</span>
        </label>
        <label className={classes.pageItem}>
          <input type='checkbox' onChange={(e) => setProjects(!projects)}/>
          <span className={classes.checkmark}/>
          <span className={classes.pageLabel}>My Projects</span>
        </label>
        <label className={classes.pageItem}>
          <input type='checkbox' onChange={(e) => setTerminal(!terminal)}/>
          <span className={classes.checkmark}/>
          <span className={classes.pageLabel}>Embedded Terminal</span>
        </label>
      </div>
    </>
  )
}

export default SelectPages
