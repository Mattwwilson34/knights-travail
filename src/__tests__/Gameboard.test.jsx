import React from 'react'
import { render, screen } from '@testing-library/react'
import Gameboard from '../features/gameboard'

describe('Gameboard component', () => {
	it('Renders the Gamebord on the screen', () => {
		render(<Gameboard />)
		const GameboardComponent = screen.getByTestId('Gameboard');
		expect(GameboardComponent).toBeInTheDocument()
	})

	it('Renders the Gameboard tiles on screen', () => {
		render(<Gameboard />)
		const GameboardTile = screen.getAllByTestId('Gameboard-Tile')
		expect(GameboardTile[0]).toBeInTheDocument()
		expect(GameboardTile[0]).toHaveTextContent(false)
		expect(GameboardTile[63]).toBeInTheDocument()
		expect(GameboardTile[63]).toHaveTextContent(false)
	})

	it('Renders the correct number of gameboard tiles', () => {
		render(<Gameboard />)
		const GameboardTile = screen.getAllByTestId('Gameboard-Tile')
		expect(GameboardTile.length).toBe(64)
	})

})
