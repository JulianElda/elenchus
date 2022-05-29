import { render } from "@testing-library/react";
import NodeListItemIcon from "./node-list-item-icon";

test("renders icon", () => {
  expect(render(<NodeListItemIcon name="test.pdf" type="FILE" />)).toBeTruthy();
});
