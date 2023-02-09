import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@mui/material'
import knightTour from "../../../utils/knight-tour";
import SolutionSquare from "./SolutionSquare";
import get2dArray from "../../../utils/get-2D-array";

interface SolutionGameboardProps {
	setVisible: (visible: boolean) => void
	setVisualizationSolution: (solution: number[][]) => void
}

const SolutionGameboard = ({ setVisible, setVisualizationSolution }: SolutionGameboardProps) => {
	const [solution, setSolution] = useState(get2dArray())

	const handleClick = () => {
		const solutionArray = knightTour(8, 8, 0, 0)
		if (typeof solutionArray === 'object') {
			setSolution(solutionArray)
			setVisualizationSolution(solutionArray)
			setVisible(true)
		}
	}
	return (
		<div className="Gameboard" data-testid='Solution-Gameboard'>
			{solution.map((row, x) => {
				return <Fragment key={uuidv4()}>
					{row.map((square, y) => {
						return <SolutionSquare key={uuidv4()} x={x} y={y} moveNumber={square} />
					})}
				</Fragment>
			})}
			<Button variant='contained' data-testid='solve-button' onClick={handleClick}>Solve Knights Tour</Button>
		</div>
	)
}

export default SolutionGameboard
