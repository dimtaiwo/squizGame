import LobbyRoom from './LobbyRoom';
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

describe('LobbyRoom', () => {
    test('it renders', () => {
        render(<LobbyRoom />)
        const incLobbyRoom = screen.getByRole('lobbyRoom');
        expect(incLobbyRoom).toBeInTheDocument
    })
})