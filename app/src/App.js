/* eslint-disable react/jsx-filename-extension */
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import SelectPages from './components/SelectPages/SelectPages'
import AboutMe from './components/AboutMe/AboutMe'

const App = () => (
  <>
    <Toolbar />
    <Router>
      <Route
        path="/"
        exact
        component={Homepage}
      />
      <Route
        path="/select-pages"
        component={SelectPages}
      />
      <Route
        path="/about-me"
        exact
        component={AboutMe}
      />
    </Router>
  </>
)

export default App
