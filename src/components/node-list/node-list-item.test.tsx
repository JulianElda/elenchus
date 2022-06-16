import { render, screen } from "@testing-library/react";
import { EntryItemTypes } from "types";
import { NodeListItem } from "components/node-list";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

test("renders NodeListItem name", () => {
  render(
    <NodeListItem
      id="test-id"
      name="test-name.pdf"
      type={EntryItemTypes.FILE}
    />
  );
  const nameElement = screen.getByText(/test-name/i);
  expect(nameElement).toBeInTheDocument();
});
