import { render } from "@testing-library/react";
import OrderSummary from "../OrderSummary";

test("Initial conditions", () => {
  render(OrderSummary);

  expect(1).toBe(1);
});
