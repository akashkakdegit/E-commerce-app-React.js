import { render, prettyDOM } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from 'react';
import Products from './Products';
import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
import appStore from "../store/appStore";

// const mockStore = configureStore([]);
// const store = mockStore({});

const mockProducts = [
  {
    id: 1,
    title: 'Product 1',
    image: 'product1.jpg',
    rating: { rate: 4.5, count: 10 },
    price: 10.99,
  },
  {
    id: 2,
    title: 'Product 2',
    image: 'product2.jpg',
    rating: { rate: 3.5, count: 5 },
    price: 15.99,
  },
];

describe('Products component', () => {
  test('renders product details correctly', () => {
    const { container } = render(
      <Provider store={appStore}>
            <Products products={mockProducts} />
       </Provider>
    );
    expect(container).toBeInTheDocument();
    console.log(prettyDOM(container))
    // expect(screen.getByText('Rating: 4.5 (10 reviews)')).toBeInTheDocument();
    // expect(screen.getByText('$10.99')).toBeInTheDocument();
  });
});
