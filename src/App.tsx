import React, { useState } from 'react'
import './App.css'
import Gameboard from './features/gameboard/components/Gameboard'
import SolutionGameboard from './features/gameboard/components/SolutionGameboard'

function App() {
  const [visible, setVisible] = useState(false)
  const [visualizationSolution, setVisualizationSolution] = useState<number[][]>([[0, 0]])

  return (
    <div className="App" data-testid='App'>
      <div className="container">
        <h1>The Knight's Tour Problem</h1>
        <p>The Knight's Tour problem is a classic problem in computer science, where the goal is to find a path for a knight on a chess board such that it visits every square exactly once.</p>
        <h2>The Recursive Algorithm Solution</h2>
        <p>The solution to the Knight's Tour problem can be found using a recursive algorithm. The algorithm starts at a given square on the board and moves the knight to a new square. Then, the algorithm is repeated for the new square until all squares have been visited. If the knight is unable to move to a new square, it backtracks to the previous square and tries another move. This process continues until a solution is found or all possible moves have been exhausted.</p>
        <p>The beauty of this solution is that it is a recursive algorithm, which means it divides the problem into smaller subproblems, and solves each subproblem recursively. This makes the solution elegant and easy to understand.</p>
        <h2>Visual Display of the Algorithm</h2>
        <p>The chess board below is filled with 0's. By pressing the "Solve Knights Tour" button, the algorithm to solve the Knights Tour problem will commence. Upon completion, the chess board will be updated with the correct solution, and a second chess board will also be displayed with a knight on it. This second board provides a visual representation of the knight's path as it moves across the entire board without repeating any squares. To witness the algorithm in action once more, simply refresh the page.</p>
      </div>
      <div className="gameboard-container">
        <SolutionGameboard setVisible={setVisible} setVisualizationSolution={setVisualizationSolution} data-testid='Solution-Gameboard' />
        {visible ? (<Gameboard solution={visualizationSolution} data-testid='Gameboard' />) : null}
      </div>
    </div>
  )
}

export default App
