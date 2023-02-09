import React from 'react'

interface SquareProps {
	x: number,
	y: number,
	knightX: number,
	knightY: number,
	moveNumber: number,
	visitedSquares: Set<string>,
}

const Square = ({ x, y, knightX, knightY, moveNumber, visitedSquares }: SquareProps) => {
	const isKnight = x === knightX && y === knightY;


	const getSquareColor = (x: number, y: number): string => {
		if (x % 2 === 0 && y % 2 === 1) {
			return 'black'
		}
		if (x % 2 === 1 && y % 2 === 0) {
			return 'black'
		}
		else {
			return 'white'
		}
	}

	return (
		<div className={`square ${getSquareColor(x, y)}`} data-testid='Gameboard-Square'>
			{isKnight ? (
				<span role="img" aria-label="knight" className='knight'>♞</span>
			) : visitedSquares.has(`${x},${y}`) ? (
				<span role="img" aria-label="Checkmark">✔️</span>
			) : moveNumber}
		</div>
	);
}

export default Square
