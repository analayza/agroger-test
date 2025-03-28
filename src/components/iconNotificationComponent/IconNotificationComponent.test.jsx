import { render, screen } from "@testing-library/react";
import IconNotification from "../iconNotificationComponent/IconNotification";


test("should render the coffee beans icon", () => {
  render(<IconNotification />);

  const iconElement = screen.getByTestId("gitCoffeeBeans");
  
  expect(iconElement).toBeInTheDocument();
});