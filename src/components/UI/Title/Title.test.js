import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

//import Counter from './Counter'
import Title from './Title'

test('title exists', () => {
    render(<Title />)
    const incImg = screen.getByRole('img', { name: /img/i })
    expect(incImg).toBeInTheDocument
})

