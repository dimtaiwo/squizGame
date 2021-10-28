import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

//import Counter from './Counter'
import ScoreCard from './ScoreCard'

test('ScoreCard exists', () => {
    render(<ScoreCard />)
    const incScoreCard = screen.getByRole('score-card', { name: "score-card" })
    expect(incScoreCard).toBeInTheDocument
})
