import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

//import Counter from './Counter'
import Button from './Button'

test('button exists', () => {
    render(<Button />)
    const incButton = screen.getByRole('button', { name: /Button/i })
    expect(incButton).toBeInTheDocument
})


test('it calls onClick prop when clicked', () => {
    const stubHandleClick = jest.fn();
    render(<Button onClick={stubHandleClick} />)
    let btn = screen.getByRole('button', { name: /Button/i })
    userEvent.click(btn)
    expect(stubHandleClick).toHaveBeenCalledTimes(1);
})





// test('Hello button exists', () =>{
//     render (<Button/>)
//     const incButton = screen.getElementsByClassName('btn')
//     console.log(incButton)
// })
