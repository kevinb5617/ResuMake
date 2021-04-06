/* eslint-disable react/jsx-filename-extension */
import './App.css'
import Homepage from './components/Homepage/Homepage'
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import SelectPages from './components/SelectPages/SelectPages'

import { BrowserRouter as Router, Route} from 'react-router-dom'


const App = () => {
  return (
    <>
      <Toolbar />
      <Router>
        <Route
          path='/'
          exact
          component={Homepage}
        />
        <Route
          path='/select-pages'
          component={SelectPages}
        />
      </Router>
    </>
  )
}

export default App
