import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import '@testing-library/react-native'
import { useHistory } from "react-router-dom";

import React from 'react';

//import Counter from './Counter'
import BackButton from './BackButton'

test('BackButton exists', () => {
    render(<BackButton />)
    const incButton = screen.getByRole('button', { name: /back-button/i })
    expect(incButton).toBeInTheDocument
})


// test('it calls onClick prop when clicked', () => {
//     const stubHandleClick = jest.fn();
//     render(<BackButton onClick={stubHandleClick} />)
//     let btn = screen.getByRole('button', { name: /back-button/i })
//     userEvent.click(btn)
//     expect(stubHandleClick).toHaveBeenCalledTimes(1);
// })
