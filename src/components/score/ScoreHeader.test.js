import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

//import Counter from './Counter'
import ScoreHeader from './ScoreHeader'

test('ScoreHeader exists', () => {
    render(<ScoreHeader />)
    const incScoreHeader = screen.getByRole('score-header', { name: "score-header" })
    expect(incScoreHeader).toBeInTheDocument
})
