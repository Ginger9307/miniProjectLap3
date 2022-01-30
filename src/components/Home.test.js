import { render, screen } from '@testing-library/react';
import Home from './Home';
import React from 'react'
import { act } from 'react-dom/test-utils';


describe('Home', () => {
    
  beforeEach(() => {
    render(<Home />)
  });

  it("opens with 0", () => {
    // Check correct page content showed up
    expect(document.body.textContent).toBe('Welcome');
  });

})