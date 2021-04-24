/* eslint-disable react/jsx-filename-extension */
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import SelectPages from './components/SelectPages/SelectPages'
import InfoInput from './components/InfoInput/InfoInput'

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
        path="/info-input"
        component={InfoInput}
      />
    </Router>
  </>
)

export default App
