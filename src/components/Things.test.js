import { render, screen , fireEvent} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Things from './Things';
import React from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import thingReducer from '../reducers/things';

const TestProviders = ({ initState }) => {
    initState ||= { all: [] }
    const testStore = createStore(() => thingReducer(initState, { type: '@@INIT' }))

    return ({ children }) => (
        <Provider store={testStore}>
            { children }
        </Provider>
    )
}

const renderWithReduxProvider = (ui, options={}) => {
    let TestWrapper = TestProviders(options)
    render(ui, { wrapper: TestWrapper, ...options })
}

describe('Things', () => {

    beforeEach(() => {
        const initState = { all: [ 'milk' ] }
        renderWithReduxProvider(<Things />, { initState })
      });
    
    it('renders a clickable button', () => {
        const addBtn = screen.getByRole('button')
        expect(addBtn.onclick).toBeInstanceOf(Function)
    }); 

    it('renders an list if things out of initState', () => {
        expect(document.body.textContent).toBe('milk')
    }); 

    it('renders a input type of text', () => {
        const inputTxt = screen.getByRole('textbox')
        expect(inputTxt.value).toBe('')
    });

    // it('renders a clickable button', () => {
    //     const inputTxt = screen.getByRole('textbox')
    //     expect(inputTxt.onchange).toBeInstanceOf(Function)
    // }); 

    // it('renders a clickable button', () => {
    //     // const initState = { all: [ 'milk' ] }
    //     // renderWithReduxProvider(<Things />, { initState })
    //     const inputTxt = screen.getByRole ('textbox');
    //     fireEvent.change(inputTxt, {target: {value: 'tomato'}});
    //     // const inputTxt = screen.getByRole('textbox')
    //     expect(inputTxt.value).toBe('tomato');
    // }); 


//   it("shows 1 after click +", () => {
//     // Interact with page
//     act(() => {
//       // Find the link (perhaps using the text content)
//       const plusButton = document.querySelector('#increase');
//       // Click it
//       plusButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//     });
//     const h3 = screen.queryByRole('heading');
//     // expect(h3).toBeInTheDocument();
//     expect(document.body.textContent).toBe(' 1 ');
//   })

})

// it('renders a clickable button', () => {
//     const initState = { all: [ 'milk' ] }
//     // renderWithReduxProvider(<Things />, { initState })
//     let TestWrapper = TestProviders({initState })
//     const { getByRole } = render(<Things />, { wrapper: TestWrapper, ...{ initState }} )
//     const inputTxt = getByRole('textbox');
//     // fireEvent.input(inputTxt, { target: { value: 'tomato' } });
//     // userEvent.type(inputTxt, "Test Example")
//     // const inputTxt = screen.getByRole('textbox')
//     // expect(inputTxt.value).toBe('tomato');
//     console.log(inputTxt)
//     // expect(inputTxt.value).toBe("Test Example");
//     // expect(onChange).toHaveBeenCalled();

//     userEvent.type(inputTxt, "Beth")
//     console.log(inputTxt)
//     expect(inputTxt).toBeInTheDocument()
// }); 