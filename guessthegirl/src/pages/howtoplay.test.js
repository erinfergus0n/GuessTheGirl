import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HowToPage from './howtoplay';

test('renders How To Play page header', () => {
  render(
    <MemoryRouter>
      <HowToPage />
    </MemoryRouter>
  );

  const header = screen.getByText(/how to/i, { selector: '.app_header' });
  expect(header).toBeInTheDocument();
});
