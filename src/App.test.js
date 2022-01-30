import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {BrowserRouter, Router} from 'react-router-dom'
// import { useNavigate , useHref} from 'react-router-dom';
import React from 'react'
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";


describe('React Route', () => {
    
  beforeEach(() => {
     // in a real test a renderer like "@testing-library/react"
    // would take care of setting up the DOM elements
    const root = document.createElement('div');
    document.body.appendChild(root);
  
    // Render app
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
      root
    );
  });

  it("opens with a navbar", () => {
    const nav = screen.queryByRole('navigation');
    expect(nav).toBeInTheDocument();
  })

  it("opens with a 4 items in the navbar", () => {
    // Check correct page content showed up
    expect(document.body.textContent).toBe('Home  |   Counter  |   Things  |   Go back');
  });
    
})

