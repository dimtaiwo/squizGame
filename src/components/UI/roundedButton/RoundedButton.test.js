import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

//import Counter from './Counter'
import RoundedButton from './RoundedButton'

test('RoundedButton exists', () => {
    render(<RoundedButton />)
    const incButton = screen.getByRole('button', { name: /rounded-button/i })
    expect(incButton).toBeInTheDocument
})
