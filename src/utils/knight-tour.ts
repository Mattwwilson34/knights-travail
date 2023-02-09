import get2dArray from "./get-2D-array";

function knightTour(rows: number, cols: number, rowStart: number, colStart: number): number[][] | boolean {

  const pathRow = [2, 1, -1, -2, -2, -1, 1, 2]
  const pathCol = [1, 2, 2, 1, -1, -2, -2, -1]

  const gameboard = get2dArray(rows, cols)

  gameboard[rowStart][colStart] = 1;


  // validate move util function
  function validMove(gameboard: number[][], row: number, col: number) {
    return (row > -1 && row < gameboard[0].length && col > -1 && col < gameboard[0].length && gameboard[row][col] === 0)
  }

  // recursive function
  function findKnightTour(gameboard: number[][], row: number, col: number, move: number) {
    if (move === rows * cols) {
      return true
    }
    else {
      for (let i = 0; i < pathRow.length; i++) {
        const rowNew = row + pathRow[i]
        const colNew = col + pathCol[i]
        if (validMove(gameboard, rowNew, colNew)) {
          move++
          gameboard[rowNew][colNew] = move;
          if (findKnightTour(gameboard, rowNew, colNew, move)) {
            return true
          }
          move--;
          gameboard[rowNew][colNew] = 0;
        }
      }
    }
  }
  //

  if (findKnightTour(gameboard, rowStart, colStart, 1)) {
    return gameboard
  }
  else {
    console.log('no viable path from this starting position.')
    return false
  }
}



export default knightTour
