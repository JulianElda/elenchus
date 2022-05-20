import React from "react";
import { render, screen } from '@testing-library/react';
import App from './app';

test('shows loading', () => {
  render(<App />);
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
