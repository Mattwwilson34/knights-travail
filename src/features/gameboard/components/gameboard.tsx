import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import get2dArray from '../../../utils/2d-array-generator'

const Gameboard = () => {
	const gameboardArray: number[][] = get2dArray();
	// 2D array not required to render gameboard
	// flattening array reduces need for extra map function 
	// will need to revisit when game logic introduced
	const gameboardTiles: number[] = gameboardArray.flat()

	return (
		<div className="Gameboard" data-testid='Gameboard'>
			{gameboardTiles.map(tile => {
				return (
					<div className='Gameboard-Tile' key={uuidv4()} data-testid='Gameboard-Tile'>{tile}</div>
				)
			})}

		</div>
	)
}

export default Gameboard
