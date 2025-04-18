import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SuggestionPage from './SuggestionPage';

test('renders Suggestion page header', () => {
  render(
    <MemoryRouter>
      <SuggestionPage />
    </MemoryRouter>
  );

  const header = screen.getByText(/suggest an artist/i, { selector: '.app_header' });
  expect(header).toBeInTheDocument();
});
