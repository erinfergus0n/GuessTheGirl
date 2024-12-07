import React from 'react';
import { render, screen } from '@testing-library/react';
import Creators from './CreatorInfo';

test('renders all creator names to page', () => {
  render(<Creators />);

  const creatorNames = ["Nesrin", "Annie", "Erin", "Sruti", "Joanna", "Laura"];

  creatorNames.forEach(name => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
