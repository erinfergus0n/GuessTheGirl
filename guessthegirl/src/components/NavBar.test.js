import React from 'react';
import { render } from '@testing-library/react'; 
import { MemoryRouter } from 'react-router-dom'; 
import NavigationBar from './NavBar'; 

test('renders all navbar links with correct routes', () => {
  const { getByText } = render(
    <MemoryRouter>
      <NavigationBar />
    </MemoryRouter>
  );

  expect(getByText('Home')).toHaveAttribute('href', '/');
  expect(getByText('About Us')).toHaveAttribute('href', '/about');
  expect(getByText('How to Play')).toHaveAttribute('href', '/howtoplay');
  expect(getByText('Statistics')).toHaveAttribute('href', '/stats');
  expect(getByText('Feedback')).toHaveAttribute('href', '/feedback');
  expect(getByText('Suggest an Artist')).toHaveAttribute('href', '/suggestion');
});
