import React from 'react';
import { render } from '@testing-library/react';
import AboutPage from './about'; 

test('renders About Us page', () => {
  const { getByText } = render(<AboutPage />);
  expect(getByText(/About Us/i)).toBeInTheDocument();
});