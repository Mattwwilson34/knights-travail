import React from 'react'
import './App.css'
import Gameboard from './features/gameboard'
import knightTour from './utils/knight-tour'
import solution from './utils/mock-solution-array'

function App() {
  const handleClick = () => {
    const array = knightTour(8, 8, 0, 0)
    console.log(array)
  }

  return (
    <div className="App" data-testid='App'>
      <Gameboard solution={solution} data-testid='Gameboard' />
      <button type='button' onClick={handleClick}>Start</button>
    </div>
  )
}

export default App
