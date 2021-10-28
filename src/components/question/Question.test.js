import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

//import Counter from './Counter'
import Question from './Question'

test('Question exists', () => {
    render(<Question />)
    const incQuestion = screen.getByRole('question', { name: "question" })
    expect(incQuestion).toBeInTheDocument
})
