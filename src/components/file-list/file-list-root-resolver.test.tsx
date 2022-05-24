import React from "react";
import { render, screen } from '@testing-library/react';
import FileListRootResolver from './file-list-root-resolver';

test.skip('renders loading', () => {
  render(<FileListRootResolver />);
  const nameElement = screen.getByText(/loading items/i);
  expect(nameElement).toBeInTheDocument();
});
