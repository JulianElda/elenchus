import React from "react";
import { render, screen } from '@testing-library/react';
import App from './app';

test('shows nick in toolbar', () => {
  let clientConfiguration = {nick: "Jono"}
  render(<App clientConfiguration={clientConfiguration} />);
  const linkElement = screen.getByText(/Jono/i);
  expect(linkElement).toBeInTheDocument();
});
