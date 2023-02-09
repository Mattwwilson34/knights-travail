import React, { Fragment, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import findIndex from '../../../utils/get-index-of-2D-array';
import { Button } from '@mui/material'
import Square from './Square';

interface GameboardProps {
	solution: number[][];
}

const Gameboard = ({ solution }: GameboardProps) => {
	const [knightX, setKnightX] = useState(0)
	const [knightY, setKnightY] = useState(0)
	const [step, setStep] = useState(1);
	const [running, setRunning] = useState(false);
	const [visitedSquares, setVisitedSquares] = useState(new Set<string>())

	useEffect(() => {
		let intervalId: number | null = null;
		const coordinates: [number, number] = findIndex(solution, step)

		if (step === 65) {
			setRunning(false)
		}


		if (running) {
			intervalId = window.setInterval(() => {
				setStep((prevStep) => prevStep += 1)
			}, 500)
		}

		setKnightX(coordinates[0])
		setKnightY(coordinates[1])
		setVisitedSquares((prevVisitedSquares) => {
			prevVisitedSquares.add(`${knightX},${knightY}`)
			return prevVisitedSquares
		})

		return () => {
			if (intervalId) {
				clearInterval(intervalId)
			}
		}
	}, [running, step])


	const handleClick = (): void => setRunning((prevRunning) => !prevRunning)

	return (
		<div className="Gameboard" data-testid='Gameboard'>
			{solution.map((row, x) => {
				return <Fragment key={uuidv4()}>
					{row.map((square, y) => {
						return <Square key={uuidv4()} x={x} y={y} knightX={knightX} knightY={knightY} moveNumber={square} visitedSquares={visitedSquares} />
					})}
				</Fragment>
			})}
			<Button variant='contained' onClick={handleClick}>Activate Knight</Button>
		</div>
	)
}

export default Gameboard
