import {
  render,
  screen,
  // waitFor,
  // waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

it("should get a snapshot", () => {
  const { asFragment } = render(<SummaryForm />);

  expect(asFragment(<SummaryForm />)).toMatchSnapshot();
});

test("Initial conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /I agree to Terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test("Checkbox enables button on first click and disables on second click", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /I agree to Terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  userEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  userEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

// test("popover responds to hover", async () => {
//   render(<SummaryForm />);

//   const nullPopover = screen.queryByText(
//     /no ice cream will actually be delivered/i
//   );
//   expect(nullPopover).not.toBeInTheDocument();

//   const termsAndConditions = screen.getByLabelText(
//     /i agree to terms and conditions/i
//   );
//   userEvent.hover(termsAndConditions);

//   // const popover = screen.getByLabelText(
//   //   /no ice cream will actually be delivered/i
//   // );
//   // expect(popover).toBeInTheDocument();

//   const tooltipMessage = await screen.findByRole("tooltip", {
//     name: /no ice cream will actually be delivered/i,
//   });
//   expect(tooltipMessage).toBeInTheDocument();

//   userEvent.unhover(termsAndConditions);
//   await waitForElementToBeRemoved(() =>
//     screen.queryByText(/no ice cream will actually be delivered/i)
//   );
// });
