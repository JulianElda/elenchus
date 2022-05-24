import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from 'history'
import { act, render, screen } from '@testing-library/react';

import axios from "@api/axios";
import BoxListResolver from './box-list-resolver';

test('renders loading', () => {
  render(<BoxListResolver />);
  const nameElement = screen.getByText(/loading boxes/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders boxes', async () => {

  const history = createMemoryHistory()
  
  let boxes = {data: [{id: 1, name: "test-box", type:"DATAROOM"}]}
  jest.spyOn(axios, "get").mockImplementation(() => {
    return Promise.resolve({then: (callback: any) => {callback(boxes)}})
  })

  await act(async () => {
    render(
      <Router location="/" navigator={history}>
        <BoxListResolver />
      </Router>
    );

  });

  const nameElement = screen.getByText(/test-box/i);
  expect(nameElement).toBeInTheDocument();
});