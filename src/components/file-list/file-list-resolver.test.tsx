import React from "react";
import { render, screen } from '@testing-library/react';
import FileListResolver from './file-list-resolver';

test('renders loading', () => {
  render(<FileListResolver />);
  const nameElement = screen.getByText(/loading items/i);
  expect(nameElement).toBeInTheDocument();
});
