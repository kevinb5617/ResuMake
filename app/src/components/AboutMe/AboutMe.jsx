// import { Link } from 'react-router-dom'
import classes from './AboutMe.module.css'
import johnSmith from '../../assets/images/johnsmith.png'

const name = 'John Smith';

const text1 = 'John Smith (baptized 6 January 1580 – 21 June 1631) was an English soldier, explorer, colonial governor, Admiral of New England, and author. He played an important role in the establishment of the colony at Jamestown, Virginia, the first permanent English settlement in America in the early 17th century. He was a leader of the Virginia Colony between September 1608 and August 1609, and he led an exploration along the rivers of Virginia and the Chesapeake Bay, during which he became the first English explorer to map the Chesapeake Bay area. Later, he explored and mapped the coast of New England. He was knighted for his services to Sigismund Báthory, Prince of Transylvania, and his friend Mózes Székely.Jamestown was established in 1607. Smith trained the first settlers to work at farming and fishing, thus saving the colony from early devastation. He publicly stated, "He that will not work, shall not eat", alluding to 2 Thessalonians 3:10.';

const AboutMe = () => (
  <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />

    <h2 className={classes.Name}>John Smith</h2>
    <div className={classes.AboutMe}>
      <div className={classes.row}>
        <div className={`${classes.column} ${classes.big}`}>
          <p>{text1}</p>
        </div>
        <div className={`${classes.column} ${classes.small}`}>
          <img src={johnSmith} alt={name} />
        </div>
      </div>
      <div className={classes.row}>
        <div className={`${classes.column} ${classes.small}`}>
          <img src={johnSmith} alt={name} />
        </div>
        <div className={`${classes.column} ${classes.big}`}>
          <p>
            <h1>Awards and Recognitions</h1>
            <ul>
              <li>award 1</li>
              <li>award 2</li>
              <li>award 3</li>
              <li>recognition 1</li>
              <li>recognition 2</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </>
)

export default AboutMe
