// test for footer on app.js

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

  // container.querySelector to get by class
  const footerElement = container.querySelector('.footer');
  expect(footerElement).toBeInTheDocument();
});
