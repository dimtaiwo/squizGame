import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

//import Counter from './Counter'
import ScoreFilter from './ScoreFilter'

test('ScoreFilter exists', () => {
    render(<ScoreFilter data={[]}/>)
    const incScoreFilter = screen.getByRole('score-filter')//, { name: "score-filter" })
    expect(incScoreFilter).toBeInTheDocument
})
