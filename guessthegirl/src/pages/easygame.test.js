import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './easygame';

test('renders input field on the Game page', () => {
  render(<Game />);
  const inputField = screen.getByRole('textbox'); // Input elements with type="text" have the role "textbox"
  expect(inputField).toBeInTheDocument();
});
