import React from 'react'
import './App.css'
import Gameboard from './features/gameboard'
import './utils/back-track-algorithm'

function App() {

  return (
    <div className="App" data-testid='App'>
      <Gameboard />
    </div>
  )
}

export default App
