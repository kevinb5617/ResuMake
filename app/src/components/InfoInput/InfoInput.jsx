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
      <span className={classes.pageLabel}>Name: </span>
      <input type="text" name="name" />
      <br />

      <span className={classes.pageLabel}>Title: </span>
      <input type="text" name="title" />
      <br />

      <span className={classes.pageLabel}>Bio: </span>
      <textarea name="bio" />
      <br />

      <button type="button" className={classes.SubmitBtn}>
        Submit
      </button>

    </form>
  </div>
)

export default InfoInput
