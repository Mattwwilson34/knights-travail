import React from 'react'

interface SolutionSquareProps {
	x: number
	y: number
	moveNumber: number,
}

const SolutionSquare = ({ x, y, moveNumber }: SolutionSquareProps) => {

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
		<div className={`square ${getSquareColor(x, y)}`} data-testid='Solution-Gameboard-Square'>
			{moveNumber}
		</div>
	);
}

export default SolutionSquare
