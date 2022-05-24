import { render, screen } from "@testing-library/react";
import App from "./App";

it("should get a snapshot", () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});
