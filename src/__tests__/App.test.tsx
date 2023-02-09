import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App component', () => {
  it('Renders the component on the screen', () => {
    render(<App />)
    const AppComponent = screen.getByTestId('App');
    expect(AppComponent).toBeInTheDocument()
  })

  it('Renders all text as expected', () => {
    const { getByText } = render(<App />)
    expect(getByText("The Knight's Tour Problem")).toBeInTheDocument()
    expect(getByText("The Recursive Algorithm Solution")).toBeInTheDocument()
    expect(getByText("Visual Display of the Algorithm")).toBeInTheDocument()
  })

  it('Renders the Solution-Gameboard', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('Solution-Gameboard')).toBeInTheDocument();
  });

  it('Renders Gameboard after Button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('solve-button'))
    const GameboardComponent = screen.getByTestId('Gameboard')
    expect(GameboardComponent).toBeInTheDocument()
  });
})
