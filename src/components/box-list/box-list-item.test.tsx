import React from "react";
import { render, screen } from '@testing-library/react';
import BoxListItem from './box-list-item';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));

test('renders BoxListItem name', () => {
  render(
    <BoxListItem name="test-name"/>
  );
  const nameElement = screen.getByText(/test-name/i);
  expect(nameElement).toBeInTheDocument();
});
