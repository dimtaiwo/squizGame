import Home from './Home';
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

describe('Home', () => {
    test('it renders', () => {
        render(<Home />)
        const incHome = screen.getByRole('home');
        expect(incHome).toBeInTheDocument
    })
})