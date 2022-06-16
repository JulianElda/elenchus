import { render } from "@testing-library/react";
import { NodeListItemIcon } from "components/node-list";

test("renders icon", () => {
  expect(render(<NodeListItemIcon name="test.pdf" type="FILE" />)).toBeTruthy();
});
