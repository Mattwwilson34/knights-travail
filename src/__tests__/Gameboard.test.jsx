import React from 'react'
import { render, screen } from '@testing-library/react'
import Gameboard from '../features/gameboard'

describe('Gameboard component', () => {
	it('Renders the component on the screen', () => {
		render(<Gameboard />)
		const GameboardComponent = screen.getByTestId('Gameboard');
		expect(GameboardComponent).toBeInTheDocument()
	})
})
