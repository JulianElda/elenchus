import React from "react";
import { render, screen } from '@testing-library/react';
import FileListItemIcon from './file-list-item-icon';

test('renders icon', () => {
  let icon = render(<FileListItemIcon name="test.pdf" type="FILE"/>);
  expect(icon).toBeTruthy();
});
