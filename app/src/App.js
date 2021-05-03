/* eslint-disable react/jsx-filename-extension */
import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import SelectPages from './components/SelectPages/SelectPages'
import InfoInput from './components/InfoInput/InfoInput'
import AboutMe from './components/AboutMe/AboutMe'

function App() {
  const [globalName, setglobalName] = useState('')
  const [globalTitle, setglobalTitle] = useState('')
  const [globalBio, setglobalBio] = useState('')

  return (
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
        <Route path="/info-input">
          <InfoInput
            setglobalName={setglobalName}
            setglobalTitle={setglobalTitle}
            setglobalBio={setglobalBio}
          />
        </Route>
        <Route path="/about-me">
          <AboutMe globalName={globalName} globalTitle={globalTitle} globalBio={globalBio} />
        </Route>
      </Router>
    </>
  )
}

export default App
