import Results from './Results';
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

describe('Results', () => {
    test('it renders', () => {
        render(<Results />)
        const incResults = screen.getByRole('results');
        expect(incResults).toBeInTheDocument
    })
})