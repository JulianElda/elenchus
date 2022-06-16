import { render, screen } from "@testing-library/react";
import { NodeListItem } from "components/node-list";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

test("renders NodeListItem name", () => {
  render(<NodeListItem name="test-name" />);
  const nameElement = screen.getByText(/test-name/i);
  expect(nameElement).toBeInTheDocument();
});
