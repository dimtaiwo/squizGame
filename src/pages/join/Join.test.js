import Join from './Join';
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

describe('Join', () => {
    test('it renders', () => {
        render(<Join />)
        const incJoin = screen.getByRole('join');
        expect(incJoin).toBeInTheDocument
    })
})