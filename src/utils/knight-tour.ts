import get2dArray from "./2d-array-generator"

const NUMBER_OF_ROWS = 5;
const NUMBER_OF_COLS = 5;

const OUT_OF_BOUNDS_POSITIVE = NUMBER_OF_ROWS;
const OUT_OF_BOUNDS_NEGATIVE = -1;

const PATH_ROW = [2, 1, -1, -2, -2, -1, 1, 2]
const PATH_COL = [1, 2, 2, 1, -1, -2, -2, -1]

const START_ROW = 0
const START_COL = 0;

function validMove(gameboard: number[][], row: number, col: number) {
  return (row > OUT_OF_BOUNDS_NEGATIVE && row < OUT_OF_BOUNDS_POSITIVE && col > OUT_OF_BOUNDS_NEGATIVE && col < OUT_OF_BOUNDS_POSITIVE && gameboard[row][col] === 0)
}

function findKnightTour(gameboard: number[][], row: number, col: number, move: number) {

  if (move === NUMBER_OF_ROWS * NUMBER_OF_COLS) {
    console.table(gameboard)
    return true
  }
  else {
    //
    for (let i = 0; i < PATH_ROW.length; i++) {
      const rowNew = row + PATH_ROW[i]
      const colNew = col + PATH_COL[i]
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

function knightTour(): boolean {

  const gameboard = get2dArray(NUMBER_OF_ROWS, NUMBER_OF_COLS)

  gameboard[START_ROW][START_COL] = 1;

  if (findKnightTour(gameboard, START_ROW, START_COL, 1)) {
    return true
  }
  else {
    console.log('no viable path from this starting position.')
    return false
  }

}

knightTour()

export default knightTour
