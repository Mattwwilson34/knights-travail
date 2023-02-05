import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
  it('Renders the component on the screen', () => {
    render(<App />)
    const AppComponent = screen.getByTestId('App');
    expect(AppComponent).toBeInTheDocument()
  })
})
