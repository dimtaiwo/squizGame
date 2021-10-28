import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

//import Counter from './Counter'
import Audio from './Audio'

test('Audio exists', () => {
    render(<Audio />)
    const incAudio = screen.getByRole('audio', { name: "audio" })
    expect(incAudio).toBeInTheDocument
})


// test('it calls onClick prop when clicked', () => {
//     const stubHandleClick = jest.fn();
//     render(<Button onClick={stubHandleClick} />)
//     let btn = screen.getByRole('button', { name: /Button/i })
//     userEvent.click(btn)
//     expect(stubHandleClick).toHaveBeenCalledTimes(1);
// })
