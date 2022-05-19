import React from 'react';
import { render, screen } from '@testing-library/react';
import FileListItem from './file-list-item';

test('renders FileListItem name', () => {
  render(<FileListItem name="test-name"/>);
  const nameElement = screen.getByText(/test-name/i);
  expect(nameElement).toBeInTheDocument();
});
