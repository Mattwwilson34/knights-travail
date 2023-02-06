import get2dArray from "./2d-array-generator"



function knightTour(rows: number, cols: number, rowStart: number, colStart: number): number[][] | boolean {

  const pathRow = [2, 1, -1, -2, -2, -1, 1, 2]
  const pathCol = [1, 2, 2, 1, -1, -2, -2, -1]

  const gameboard = get2dArray(rows, cols)

  gameboard[rowStart][colStart] = 1;

  if (findKnightTour(gameboard, rowStart, colStart, 1, rows, cols, pathRow, pathCol)) {
    return gameboard
  }
  else {
    console.log('no viable path from this starting position.')
    return false
  }
}

function findKnightTour(gameboard: number[][], row: number, col: number, move: number, rows: number, cols: number, pathRow: number[], pathCol: number[]) {

  if (move === rows * cols) {
    console.table(gameboard)
    return true
  }
  else {
    for (let i = 0; i < pathRow.length; i++) {
      const rowNew = row + pathRow[i]
      const colNew = col + pathCol[i]
      if (validMove(gameboard, rowNew, colNew)) {
        move++
        gameboard[rowNew][colNew] = move;
        if (findKnightTour(gameboard, rowNew, colNew, move, rows, cols, pathRow, pathCol)) {
          return true
        }
        move--;
        gameboard[rowNew][colNew] = 0;
      }
    }
  }
}

function validMove(gameboard: number[][], row: number, col: number) {
  return (row > -1 && row < gameboard[0].length && col > -1 && col < gameboard[0].length && gameboard[row][col] === 0)
}

export default knightTour
