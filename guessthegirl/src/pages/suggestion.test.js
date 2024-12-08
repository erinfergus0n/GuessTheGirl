import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SuggestionPage from './difficulty';

test('renders Difficulty page', () => {
  const { getByText } = render(
    <MemoryRouter>
      <SuggestionPage />
    </MemoryRouter>
  );
  expect(getByText(/suggest/i)).toBeInTheDocument();
});
