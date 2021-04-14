import { useState } from 'react'
import classes from './SelectPages.module.css'

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
        <label className={classes.pageItem} htmlFor="aboutMe">
          <input type="checkbox" id="aboutMe" onChange={() => setAboutMe(!aboutMe)} />
          <span className={classes.checkmark} />
          <span className={classes.pageLabel}>About Me</span>
        </label>
        <label className={classes.pageItem} htmlFor="resume">
          <input type="checkbox" id="resume" onChange={() => setResume(!resume)} />
          <span className={classes.checkmark} />
          <span className={classes.pageLabel}>Resume</span>
        </label>
        <label className={classes.pageItem} htmlFor="projects">
          <input type="checkbox" id="projects" onChange={() => setProjects(!projects)} />
          <span className={classes.checkmark} />
          <span className={classes.pageLabel}>My Projects</span>
        </label>
        <label className={classes.pageItem} htmlFor="terminal">
          <input type="checkbox" id="terminal" onChange={() => setTerminal(!terminal)} />
          <span className={classes.checkmark} />
          <span className={classes.pageLabel}>Embedded Terminal</span>
        </label>
      </div>
    </>
  )
}

export default SelectPages
