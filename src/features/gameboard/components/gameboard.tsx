import React, { Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid';
import get2dArray from '../../../utils/2d-array-generator'

const Gameboard = () => {
	const gameboardArray: number[][] = get2dArray();

	return (
		<div className="Gameboard" data-testid='Gameboard'>
			{gameboardArray.map(y => {
				return (
					<Fragment key={uuidv4()}>
						{y.map(x => <div className='Gameboard-Tile' key={uuidv4()}>{x}</div>)}
					</Fragment>
				)
			})}
		</div>
	)
}

export default Gameboard
