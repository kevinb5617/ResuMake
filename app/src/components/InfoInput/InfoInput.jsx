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

import classes from './InfoInput.module.css'

const InfoInput = () => (
  <div>
    <h2>
      Fill in the following information.
    </h2>
    <form className={classes.container} id="about-me">
      <label htmlFor="name">
        <span className={classes.pageLabel}>Name:</span>
        <br />
        <input type="text" name="name" placeholder="Enter your full name" />
      </label>
      <br />

      <label htmlFor="title">
        <span className={classes.pageLabel}>Title:</span>
        <br />
        <input type="text" name="title" placeholder="Enter your current title" />
      </label>
      <br />

      <label htmlFor="bio">
        <span className={classes.pageLabel}>Bio:</span>
        <br />
        <textarea name="bio" placeholder="Enter a short bio about yourself" />
      </label>
      <br />

      <button type="button" className={classes.SubmitBtn}>
        Submit
      </button>

    </form>
  </div>
)

export default InfoInput
