import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import appStore from "../store/appStore";

describe("Navbar Component", () => {
  test("renders nav-items and cart-button", async () => {
    const { container } = render(
      <Provider store={appStore}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );
    expect(container).toBeInTheDocument();
    expect(screen.getByText("SHOP.CO")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("On Sale")).toBeInTheDocument();
    expect(screen.getByText("New Arrivals")).toBeInTheDocument();
    expect(screen.getByText("Brands")).toBeInTheDocument();
    expect(screen.getByTestId("cart-button")).toBeInTheDocument();
    fireEvent.click(screen.getByText('SHOP.CO'))
    fireEvent.click(screen.getByTestId("cart-button"));
  });

  test("Search functionality works correctly", () => {
    const searchByCategory = jest.fn();
    render(
      <Router>
        <Provider store={appStore}>
          <Navbar searchByCategory={searchByCategory} />
        </Provider>
      </Router>
    );
    expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('search-icon'));
    const searchInput = screen.getByPlaceholderText("Search for products...");
    expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
    fireEvent.keyDown(searchInput, { key: "Enter", code: "Enter" });
    expect(searchByCategory).toHaveBeenCalledWith("test");
  });

  test("menu functionality", () => {
    render(
      <Provider store={appStore}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );
    expect(screen.getByTestId("menu-button")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("menu-button"));
  });
});
