import { render } from "@testing-library/react";
import FileListItemIcon from "./file-list-item-icon";

test("renders icon", () => {
  expect(render(<FileListItemIcon name="test.pdf" type="FILE" />)).toBeTruthy();
});
