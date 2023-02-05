import get2dArray from "./2d-array-generator";


const START_X = 0
const START_Y = 0


function getValidMove(currentPostion: number[], moveSet: number[][], gameboard: (boolean[] | number[])[]) {
  const [currX, currY] = currentPostion;
  const positiveOOB = gameboard[0].length;


  return moveSet.filter((move) => {
    const [moveX, moveY] = move;
    const newX = currX + moveX;
    const newY = currY + moveY;

    // check if out of bounds
    if (newX < 0 || newX >= positiveOOB || newY < 0 || newY >= positiveOOB) {
      return false
    }

    // check if move has already been made
    if (gameboard[newX][newY]) {
      return false
    }

    return true
  })
}

function updatePosition(currPos: number[], moveMade: number[]) {
  const [currX, currY] = currPos;
  const [deltaX, deltaY] = moveMade;
  const newPosition = [(currX + deltaX), (currY + deltaY)]

  return newPosition
}

function updateGameboard(currPos: number[], moveMade: number[], moveNumber: number, gameboard: (boolean[] | number[])[]) {
  const newPosition = updatePosition(currPos, moveMade)

  gameboard[newPosition[0]][newPosition[1]] = moveNumber

  return gameboard
}

let totalIterations = 0;

function knightMove(moveNumber: number, currPos: number[], moveSet: number[][], gameboard: (boolean[] | number[])[], solution: number[][]) {

  // console.log(moveNumber)

  // base case
  if (moveNumber === gameboard[0].length ** 2) {
    console.log('you solved it!')
    console.table(gameboard);
    return true
  }
  // make copy of game board
  const gameboardCopy = gameboard.map(row => row.slice())

  // get a list of valid moves from curr position
  const validMoves = getValidMove(currPos, moveSet, gameboardCopy)

  //loop through valid moves and test
  for (let i = 0; i < validMoves.length; i++) {

    totalIterations += 1;

    // increase move number
    moveNumber += 1;
    // add move to solution array
    solution.push(updatePosition(currPos, validMoves[i]));
    // update gameboard
    updateGameboard(currPos, validMoves[i], moveNumber, gameboardCopy)

    if (!knightMove(moveNumber, solution[solution.length - 1], moveSet, gameboardCopy, solution)) {
      const lastMove = solution.pop()
      if (lastMove) {

        if (lastMove[0] === START_X && lastMove[1] === START_Y) {
          console.log('No solution you have backtracked all the way to your start position.')
        }
        gameboardCopy[lastMove[0]][lastMove[1]] = false;
        moveNumber -= 1;
      }
    }
  }
  return false
}

function solveKnightsPath() {

  const gameboard = get2dArray(5, 5)


  const solution = [[START_X, START_Y]]

  const moveSet = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]

  const moveNumber = 1;

  gameboard[START_X][START_Y] = moveNumber;

  knightMove(moveNumber, solution[0], moveSet, gameboard, solution)
  console.log(totalIterations)
  return true;
}

solveKnightsPath()

