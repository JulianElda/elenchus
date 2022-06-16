import { render } from "@testing-library/react";
import { EntryItemTypes } from "types";
import { NodeListItemIcon } from "components/node-list";

test("renders icon", () => {
  expect(
    render(<NodeListItemIcon name="test.pdf" type={EntryItemTypes.FILE} />)
  ).toBeTruthy();
});
