import { render, screen } from "@testing-library/react";
import NavBar from "./NavBarComponent";

describe("NavBar Component", () => {
  test("should render the user profile icon", () => {
    render(<NavBar />);
    const userIcon = screen.getByTestId("faUserCircle");
    expect(userIcon).toBeInTheDocument();
  });

  test("should render the search input", () => {
    render(<NavBar />);
    const searchInput = screen.getByPlaceholderText(/buscar sessão/i);
    expect(searchInput).toBeInTheDocument();
  });

  test("should render the search icon", () => {
    render(<NavBar />);
    const searchIcon = screen.getByTestId("search-icon");
    expect(searchIcon).toBeInTheDocument();
  });

  test("should render the notification icon", () => {
    render(<NavBar />);
    const notificationIcon = screen.getByTestId("faUserCircle");
    expect(notificationIcon).toBeInTheDocument();
  });
});
