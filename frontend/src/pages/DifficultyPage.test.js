import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DifficultyPage from './DifficultyPage';

test('renders Difficulty page', () => {
  const { getByText } = render(
    <MemoryRouter>
      <DifficultyPage />
    </MemoryRouter>
  );
  expect(getByText(/difficulty/i)).toBeInTheDocument();
});
