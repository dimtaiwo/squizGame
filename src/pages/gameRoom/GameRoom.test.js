import GameRoom from './GameRoom';
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

describe('GameRoom', () => {
    test('it renders', () => {
        render(<GameRoom />)
        const incGameRoom = screen.getByRole('gameRoom');
        expect(incGameRoom).toBeInTheDocument
    })
})