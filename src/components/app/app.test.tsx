import { render, screen } from "@testing-library/react";
import App from "./app";

test("shows nick in toolbar", () => {
  let clientConfiguration = { nick: "Jono" };
  render(<App clientConfiguration={clientConfiguration} />);
  const nick = screen.getByText(/Jono/i);
  expect(nick).toBeInTheDocument();
});
