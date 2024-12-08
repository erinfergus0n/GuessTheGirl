import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StatsPage from './stats';

test('renders Stats page with header "Statistics"', () => {
  render(
    <MemoryRouter>
      <StatsPage />
    </MemoryRouter>
  );
  
  const header = screen.getByText(/statistics/i, { selector: '.app_header' });
  expect(header).toBeInTheDocument();
});
