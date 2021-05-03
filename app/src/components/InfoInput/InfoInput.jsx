/* End Goal:
- the previous page (select pages) will provide a list of pages to be included
- for each given page, there will be a different form for the user to fill out
- once filled out, the user will click "submit" which will populate a json file
- eventually, the information in that json file will be used to create their website
*/

/* Current Status:
- only input fields for the About Me page, with no correlation to the actual selected pages
- absolutely no functionality when submitted
- navigation to this page doesn't involve any UI buttons
- to test you must navigate to http://localhost:3000/info-input/
*/

import { useState } from 'react'
import PropTypes from 'prop-types'
import classes from './InfoInput.module.css'
import Button from '../Navigation/Button/Button'

const InfoInput = ({ setglobalName, setglobalTitle, setglobalBio }) => {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [bio, setBio] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please enter your name')
      return
    }

    if (!title) {
      alert('Please enter your title')
      return
    }

    if (!bio) {
      alert('Please enter a bio')
      return
    }

    setglobalName(name)
    setglobalTitle(title)
    setglobalBio(bio)

    setName('')
    setTitle('')
    setBio('')
  }

  return (
    <div>
      <h2>
        Fill in the following information.
      </h2>

      <form className={classes.container} id="about-me" onSubmit={onSubmit}>
        <label htmlFor="name">
          <span className={classes.pageLabel}>Name:</span>
          <br />
          <input type="text" name="name" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />

        <label htmlFor="title">
          <span className={classes.pageLabel}>Title:</span>
          <br />
          <input type="text" name="title" placeholder="Enter your current title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />

        <label htmlFor="bio">
          <span className={classes.pageLabel}>Bio:</span>
          <br />
          <textarea name="bio" placeholder="Enter a short bio about yourself" value={bio} onChange={(e) => setBio(e.target.value)} />
        </label>
        <br />

        <button type="submit" className={classes.SubmitBtn}>
          Submit
        </button>

        <Button nextPage="/about-me/" type="next" text="NEXT" />

      </form>
    </div>
  )
}

InfoInput.propTypes = {
  setglobalName: PropTypes.func,
  setglobalTitle: PropTypes.func,
  setglobalBio: PropTypes.func,
}

InfoInput.defaultProps = {
  setglobalName: null,
  setglobalTitle: null,
  setglobalBio: null,
}

export default InfoInput
