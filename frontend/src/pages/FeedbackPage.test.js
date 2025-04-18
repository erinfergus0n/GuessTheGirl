import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FeedbackPage from './FeedbackPage';

test('renders Feedback page header', () => {
  render(
    <MemoryRouter>
      <FeedbackPage />
    </MemoryRouter>
  );

  const header = screen.getByText(/feedback/i, { selector: '.app_header' });
  expect(header).toBeInTheDocument();
});
