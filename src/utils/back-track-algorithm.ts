import get2dArray from "./2d-array-generator";

const gameboard = get2dArray()

const backTrack = (gameboard: number[][], startPosition: number[]) => {
  const outOfBoundsRight: number = gameboard[0].length;
  const outOfBoundsLeft = -1;
  const outOfBoundsUp = -1;
  const outOfBoundsDown: number = gameboard.length;

  const moveMap = {
    rightUp: [2, 1],
    rightDown: [2, -1],
    leftUp: [-2, 1],
    leftDown: [-2, -1],
    upRight: [1, 2],
    upLeft: [-1, 2],
    downRight: [1, -2],
    downLeft: [-1, -2],
  }

  const totalBoardTiles = gameboard.length * gameboard[0].length;
  const boardTilesVisited = [startPosition];
  const numberOfTilesVisited = boardTilesVisited.length;
  let currentMoveX = startPosition[0]
  let currentMoveY = startPosition[1]
  let count = 0;

  // console logging to prevent unused variable linting errors
  console.log(totalBoardTiles, numberOfTilesVisited)

  while (count < 100) {
    // chose move from list of moves
    // convert moveMap to array of values
    const moveArray = Object.values(moveMap)

    for (let i = 0; i < moveArray.length; i++) {
      // store last valid move
      const lastValidMove = boardTilesVisited[boardTilesVisited.length - 1]
      //select next move
      const nextMove = moveArray[i]
      // increment current position to next potential position
      currentMoveX += nextMove[0]
      currentMoveY += nextMove[1]

      // check if out of bounds left or right
      if (currentMoveX <= outOfBoundsLeft || currentMoveX >= outOfBoundsRight) {
        // reset current positions to last valid move
        currentMoveX = lastValidMove[0]
        currentMoveY = lastValidMove[1]
        continue
      }
      // check if out of bounds up or down
      if (currentMoveY <= outOfBoundsUp || currentMoveY >= outOfBoundsDown) {
        // reset current positions to last valid move
        currentMoveX = lastValidMove[0]
        currentMoveY = lastValidMove[1]
        continue
      }
      // check if move has already been made
      if (boardTilesVisited.some(tile => (tile[0] === currentMoveX && tile[1] === currentMoveY))) {
        // reset current positions to last valid move
        currentMoveX = lastValidMove[0]
        currentMoveY = lastValidMove[1]
        continue
      }
      else {
        // if here move is valid
        // update moves already made array
        boardTilesVisited.push([currentMoveX, currentMoveY])
        // break out of for loop
        break;
      }
    }
    count++
  }
  console.log(boardTilesVisited)
}

export default backTrack
