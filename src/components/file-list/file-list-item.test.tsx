import { render, screen } from "@testing-library/react";
import FileListItem from "./file-list-item";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

test("renders FileListItem name", () => {
  render(<FileListItem name="test-name" />);
  const nameElement = screen.getByText(/test-name/i);
  expect(nameElement).toBeInTheDocument();
});
