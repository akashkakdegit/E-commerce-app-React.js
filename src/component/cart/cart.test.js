import React from "react"
import { render, prettyDOM } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Cart from "./Cart";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from '../store/cartSlice';


const rootReducer = combineReducers({
    cart: cartReducer // Assuming cartReducer is the reducer for cart slice
  });

const mockStore = configureStore(rootReducer);

describe('Cart component',()=>{
    let store;

    beforeEach(() => {
      store = mockStore({
        cart: {
          items: [
            {
              id: 1,
              title: 'Product 1',
              image: 'image1.jpg',
              price: 10.99,
              quantity: 2,
              rating: { rate: 4.5, count: 10 },
              category: 'Category 1',
            },
            {
              id: 2,
              title: 'Product 2',
              image: 'image2.jpg',
              price: 19.99,
              quantity: 1,
              rating: { rate: 4.2, count: 8 },
              category: 'Category 2',
            },
          ],
        },
      });
    });
  
    it('renders cart items correctly', () => {
      const { container } = render(
        <Provider store={store}>
          <Cart />
        </Provider>
      );
      expect(container).toBeInTheDocument();
      })
    // test('render cart component',()=>{
    //     const{container}=render(
    //         <Provider store={appStore}>
    //     <Cart/>
    //     </Provider>)
    //     expect(container).toBeInTheDocument();
    // })
})