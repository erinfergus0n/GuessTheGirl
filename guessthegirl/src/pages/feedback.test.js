import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FeedbackPage from './difficulty';

test('renders Feedback page', () => {
  const { getByText } = render(
    <MemoryRouter>
      <FeedbackPage />
    </MemoryRouter>
  );
  expect(getByText(/feedback/i)).toBeInTheDocument();
});
