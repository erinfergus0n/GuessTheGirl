import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';


test('renders footer in App page using class name', () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );


  const footerElement = container.querySelector('.footer');
  expect(footerElement).toBeInTheDocument();
});



test('renders navbar in App page using class name', () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const navbarElement = container.querySelector('.nav');
  expect(navbarElement).toBeInTheDocument();
});