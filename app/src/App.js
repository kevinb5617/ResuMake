/* eslint-disable react/jsx-filename-extension */
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import SelectPages from './components/SelectPages/SelectPages'
import InfoInput from './components/InfoInput/InfoInput'

/**
 * App always renders the Toolbar with the Logo
 *
 * The rest of the page is determined by the path
*/
const App = () => (
  <>
    <Toolbar />
    <Router>
      {/* Route for the landing page */}
      <Route
        path="/"
        exact
        component={Homepage}
      />

      {/* Route for page selection */}
      <Route
        path="/select-pages"
        component={SelectPages}
      />

      {/* Route for inputting user data */}
      <Route
        path="/info-input"
        component={InfoInput}
      />
    </Router>
  </>
)

export default App
