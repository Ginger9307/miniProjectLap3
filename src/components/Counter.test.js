import { render, screen } from '@testing-library/react';
import Counter from './Counter';
// import { useNavigate , useHref} from 'react-router-dom';
import React from 'react'
// import { MemoryRouter } from "react-router-dom";
import { act } from 'react-dom/test-utils';


describe('Counter', () => {
    
  beforeEach(() => {
    render(<Counter />)
  });

  it("opens with 0", () => {
    // Check correct page content showed up
    expect(document.body.textContent).toBe(' 0 ');
  });

  it("shows 1 after click +", () => {
    // Interact with page
    act(() => {
      // Find the link (perhaps using the text content)
      const plusButton = document.querySelector('#increase');
      // Click it
      plusButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    const h3 = screen.queryByRole('heading');
    // expect(h3).toBeInTheDocument();
    expect(document.body.textContent).toBe(' 1 ');
  })

  it("shows -1 after click -", () => {
    // Interact with page
    act(() => {
      // Find the link (perhaps using the text content)
      const plusButton = document.querySelector('#decrease');
      // Click it
      plusButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    const h3 = screen.queryByRole('heading');
    // expect(h3).toBeInTheDocument();
    expect(document.body.textContent).toBe(' -1 ');
  })

})