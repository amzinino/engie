import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const selectElement = screen.getByText(/agency1/i);
  expect(selectElement).toBeInTheDocument();
});
