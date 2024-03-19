import {
  render,
  screen
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";

describe("footer component", () => {
  test("render footer component", () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
    expect(
      screen.getByText("STAY UPTO DATE ABOUT OUR LATEST OFFERS")
    ).toBeInTheDocument();
    expect(screen.getByTestId("subscribe-button")).toBeInTheDocument();
    expect(
      screen.getByText(
        "We have clothes that suits your style and which youre proud to wear.From women to men."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("COMPANY")).toBeInTheDocument();
  });
//   expect(screen.getByText('About')).toBeInTheDocument();

  test("to check footer icons", () => {
    render(<Footer />);
    expect(screen.getByTestId("twitter-icon")).toBeInTheDocument();
    expect(screen.getByTestId("facebook-icon")).toBeInTheDocument();
    expect(screen.getByTestId("instagram-icon")).toBeInTheDocument();
    expect(screen.getByTestId("github-icon")).toBeInTheDocument();
  });
});
