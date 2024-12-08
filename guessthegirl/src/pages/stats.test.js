import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StatsPage from './difficulty';

test('renders Difficulty page', () => {
  const { getByText } = render(
    <MemoryRouter>
      <StatsPage />
    </MemoryRouter>
  );
  expect(getByText(/statistics/i)).toBeInTheDocument();
});
