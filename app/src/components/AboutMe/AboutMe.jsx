// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classes from './AboutMe.module.css'
import johnSmith from '../../assets/images/johnsmith.png'

const AboutMe = ({ globalName, globalTitle, globalBio }) => (
  <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />

    <h2 className={classes.Name}>{globalName}</h2>
    <div className={classes.AboutMe}>
      <div className={classes.row}>
        <div className={`${classes.column} ${classes.big}`}>
          <p>{globalBio}</p>
        </div>
        <div className={`${classes.column} ${classes.small}`}>
          <img src={johnSmith} alt={globalName} />
        </div>
      </div>
      <div className={classes.row}>
        <div className={`${classes.column} ${classes.small}`}>
          <img src={johnSmith} alt={globalName} />
        </div>
        <div className={`${classes.column} ${classes.big}`}>
          <p>
            <h1>Awards and Recognitions</h1>
            <ul>
              <li>{globalTitle}</li>
              <li>award 1</li>
              <li>award 2</li>
              <li>recognition 1</li>
              <li>recognition 2</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </>
)

AboutMe.propTypes = {
  globalName: PropTypes.string,
  globalTitle: PropTypes.string,
  globalBio: PropTypes.string,
}

AboutMe.defaultProps = {
  globalName: '',
  globalTitle: '',
  globalBio: '',
}

export default AboutMe
