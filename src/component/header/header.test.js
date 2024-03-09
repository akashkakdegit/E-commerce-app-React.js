import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header Component", () => {
  test("renders header text and sign-up button", async () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(container).toBeInTheDocument();
    expect(
      screen.getByText("Sign up and get 20% off to your first order.")
    ).toBeInTheDocument();
    expect(screen.getByTestId("sign-up-button")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("sign-up-button"));
  });
});
