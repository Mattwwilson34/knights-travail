import React from 'react'
import { render, screen } from '@testing-library/react'
import Gameboard from '../features/gameboard'
import solution from '../utils/mock-solution-array'

describe('Gameboard component', () => {
	it('Renders the Gamebord on the screen', () => {
		render(<Gameboard solution={solution} />)
		const GameboardComponent = screen.getByTestId('Gameboard');
		expect(GameboardComponent).toBeInTheDocument()
	})

	it('Renders the Gameboard tiles on screen', () => {
		render(<Gameboard solution={solution} />)
		const GameboardSquare = screen.getAllByTestId('Gameboard-Square')
		expect(GameboardSquare[0]).toBeInTheDocument()
		expect(GameboardSquare[0]).toHaveTextContent('♞')
		expect(GameboardSquare[63]).toBeInTheDocument()
		expect(GameboardSquare[63]).toHaveTextContent(13)
	})

	it('Renders the correct number of gameboard tiles', () => {
		render(<Gameboard solution={solution} />)
		const GameboardSquare = screen.getAllByTestId('Gameboard-Square')
		expect(GameboardSquare.length).toBe(64)
	})

})
