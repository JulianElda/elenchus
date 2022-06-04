import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "api/axios";
import { AppContext } from "components/app/app.context";
import Finder from "components/finder/finder";

import { mock_clientConfiguration_admin } from "mocks/clientConfiguration";
const mockAppContextValue = {
  clientConfiguration: mock_clientConfiguration_admin,
};

test("show items", async () => {
  const user = userEvent.setup();

  const mockBoxes = [{ id: "test-box-id-1" }];

  const mockResults = [
    {
      type: "FILE",
      node: {
        id: "test-file-1",
        name: "test-file-1.pdf",
      },
    },
    {
      type: "FOLDER",
      node: {
        id: "test-folder-1",
        name: "test-folder-1",
      },
    },
  ];

  jest.spyOn(axios, "get").mockImplementation(() => {
    return Promise.resolve({
      then: (callback: any) => {
        callback({ data: mockResults });
      },
    });
  });

  render(
    <AppContext.Provider value={mockAppContextValue}>
      <Finder boxes={mockBoxes} />
    </AppContext.Provider>
  );
  await user.type(screen.getByPlaceholderText(/Find/i), "test-query");
  await user.click(screen.getByRole("button", { name: "Find", hidden: true }));

  await waitFor(async () => {
    const pdfElement = screen.getByText(mockResults[0].node.name);
    expect(pdfElement).toBeInTheDocument();
  });
});
