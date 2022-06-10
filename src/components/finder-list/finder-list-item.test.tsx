import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FinderListItem from "./finder-list-item";

test("show name and path", () => {
  render(
    <FinderListItem
      id="test-node-id"
      type="FILE"
      name="test-name"
      boxId="test-box-id"
      path="test-path"
    />
  );
  const nameElement = screen.getByText("test-name");
  expect(nameElement).toBeInTheDocument();

  const pathElement = screen.getByText("test-path");
  expect(pathElement).toBeInTheDocument();
});

test("calls file type callback", async () => {
  const user = userEvent.setup();
  const fileCallback = jest.fn();
  const folderCallback = jest.fn();
  render(
    <FinderListItem
      id="test-node-id"
      type="FILE"
      name="test-name"
      boxId="test-box-id"
      path="test-path"
      onHandleFile={fileCallback}
      onHandleFolder={folderCallback}
    />
  );
  await user.click(screen.getByText("test-name"));
  expect(fileCallback).toHaveBeenCalledWith("test-node-id", "test-name")
  expect(folderCallback).not.toHaveBeenCalled();
});

test("calls folder type callback", async () => {
  const user = userEvent.setup();
  const fileCallback = jest.fn();
  const folderCallback = jest.fn();
  render(
    <FinderListItem
      id="test-node-id"
      type="DIR"
      name="test-name"
      boxId="test-box-id"
      path="test-path"
      onHandleFile={fileCallback}
      onHandleFolder={folderCallback}
    />
  );
  await user.click(screen.getByText("test-name"));
  expect(fileCallback).not.toHaveBeenCalled();
  expect(folderCallback).toHaveBeenCalledWith("test-node-id", "test-name", "test-box-id")
});
