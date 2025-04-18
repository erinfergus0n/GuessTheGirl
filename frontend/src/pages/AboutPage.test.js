import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutPage from './AboutPage';

test('renders Difficulty page', () => {
  const { getByText } = render(
    <MemoryRouter>
      <AboutPage />
    </MemoryRouter>
  );
  expect(getByText(/about us/i)).toBeInTheDocument();
});
