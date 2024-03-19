import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../store/appStore";

const products = [
  {
    id: 1,
    title: "Product 1",
    image: "product1.jpg",
    rating: { rate: 4.5, count: 10 },
    price: 20,
  },
  {
    id: 2,
    title: "Product 2",
    image: "product2.jpg",
    rating: { rate: 3.8, count: 8 },
    price: 25,
  },
];

describe("Home Component", () => {
  test("render home component", () => {
    const { container } = render(
      <Provider store={appStore}>
        <Router>
          <Home products={products} />
        </Router>
      </Provider>
    );
    expect(container).toBeInTheDocument();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText(`$${products[0].price}`)).toBeInTheDocument();

//     console.log(
//       `Rating:${products[0].rating?.rate}(${products[0].rating?.count}reviews)`
//     );
//     expect(screen.getByText(`Rating:${products[0].rating?.rate}(${products[0].rating?.count}reviews)`)).toBeInTheDocument();
  });

  it("toggles between showing all products and a limited number of products", () => {
    render(
      <Provider store={appStore}>
        <Router>
          <Home products={products} />
        </Router>
      </Provider>
    );

    // Check if "View all" button exists and click it
    expect(screen.getByText("View all")).toBeInTheDocument();
    fireEvent.click(screen.getByText("View all"));

    // Check if "Show less" button is displayed after clicking "View all"
    expect(screen.getByText("Show less")).toBeInTheDocument();

    // Click "Show less" button
    fireEvent.click(screen.getByText("Show less"));

    // Check if "View all" button is displayed after clicking "Show less"
    expect(screen.getByText("View all")).toBeInTheDocument();
  });
});
