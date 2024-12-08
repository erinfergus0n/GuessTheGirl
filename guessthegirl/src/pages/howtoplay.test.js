import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HowToPage from './difficulty';

test('renders Difficulty page', () => {
  const { getByText } = render(
    <MemoryRouter>
      <HowToPage />
    </MemoryRouter>
  );
  expect(getByText(/how to/i)).toBeInTheDocument();
});
