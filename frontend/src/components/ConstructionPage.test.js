import React from 'react';
import { render } from '@testing-library/react';
import ConstructionPage from './ConstructionPage';

test('renders coming soon text', () => {
  const { getByText } = render(<ConstructionPage />);
  expect(getByText(/this page is coming soon./i)).toBeInTheDocument();
  expect(getByText(/stay tuned for updates/i)).toBeInTheDocument();
});
