import NotFound from './NotFound';
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

describe('NotFound', () => {
    test('it renders', () => {
        render(<NotFound />)
        const incNotFound = screen.getByRole('not-found');
        expect(incNotFound).toBeInTheDocument
    })
})