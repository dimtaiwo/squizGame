import LobbyRoom from './LobbyRoom';
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { createContext } from 'react'
import { useContext, useState, useEffect } from 'react';
import { SocketContext } from '../../Context';

describe('LobbyRoom', () => {
    test('it renders', () => {
        render(<LobbyRoom />)
        const incLobbyRoom = screen.getByRole('lobbyRoom');
        expect(incLobbyRoom).toBeInTheDocument
    })
})