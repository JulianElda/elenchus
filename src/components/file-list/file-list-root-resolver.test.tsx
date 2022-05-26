import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history'
import { act, render, screen } from '@testing-library/react';

import axios from "@api/axios";
import FileListRootResolver from './file-list-root-resolver';

test('renders loading', () => {
  const history = createMemoryHistory();
  render(
    <Router location="/" navigator={history}>
      <FileListRootResolver />
    </Router>
  );
  const nameElement = screen.getByText(/loading items/i);
  expect(nameElement).toBeInTheDocument();
});