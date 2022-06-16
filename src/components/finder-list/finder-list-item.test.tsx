import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EntryItemTypes } from "types";
import { BreadcrumbType } from "components/breadcrumbs";
import { FinderListItem } from "components/finder-list";

const mockBreadcrumbs: BreadcrumbType[] = [
  { id: "test-bread-id", name: "test-bread-name" },
];

test("show name and path", () => {
  render(
    <FinderListItem
      id="test-node-id"
      type={EntryItemTypes.FILE}
      name="test-name"
      boxId="test-box-id"
      path="test-path"
      breadcrumbs={mockBreadcrumbs}
      onHandleFile={jest.fn()}
      onHandleFolder={jest.fn()}
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
      type={EntryItemTypes.FILE}
      name="test-name"
      boxId="test-box-id"
      path="test-path"
      breadcrumbs={mockBreadcrumbs}
      onHandleFile={fileCallback}
      onHandleFolder={folderCallback}
    />
  );
  await user.click(screen.getByText("test-name"));
  expect(fileCallback).toHaveBeenCalledWith("test-node-id", "test-name");
  expect(folderCallback).not.toHaveBeenCalled();
});

test("calls folder type callback", async () => {
  const user = userEvent.setup();
  const fileCallback = jest.fn();
  const folderCallback = jest.fn();
  const mockBreadcrumbs = [
    {
      id: "test-bread-id",
      name: "test-bread-name",
    },
  ];
  render(
    <FinderListItem
      id="test-node-id"
      type={EntryItemTypes.DIR}
      name="test-name"
      boxId="test-box-id"
      path="test-path"
      breadcrumbs={mockBreadcrumbs}
      onHandleFile={fileCallback}
      onHandleFolder={folderCallback}
    />
  );
  await user.click(screen.getByText("test-name"));
  expect(fileCallback).not.toHaveBeenCalled();
  expect(folderCallback).toHaveBeenCalledWith(
    "test-node-id",
    "test-box-id",
    mockBreadcrumbs
  );
});
