import CreateRoom from './CreateRoom';
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

describe('CreateRoom', () => {
    test('it renders', () => {
        render(<CreateRoom />)
        const incCreateRoom = screen.getByRole('createRoom');
        expect(incCreateRoom).toBeInTheDocument
    })
})