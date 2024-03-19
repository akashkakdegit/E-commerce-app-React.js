import React from "react";
import { render, fireEvent, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import QuantityControl from "./QuantityControl";
import appStore from "../store/appStore";

const mockStore = configureStore([]);

describe("QuantityControl Component", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      cart: {},
    });
  });

  test("renders with initial quantity", () => {
    const { container } = render(
      <Provider store={appStore}>
        <QuantityControl count={3} itemId={1} />
      </Provider>
    );
    expect(container).toBeInTheDocument();
    expect(screen.getByTestId("remove-button")).toBeInTheDocument();
    expect(screen.getByTestId("add-button")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("increments quantity when add button is clicked", () => {
    render(
      <Provider store={store}>
        <QuantityControl count={3} itemId="1" />
      </Provider>
    );
    fireEvent.click(screen.getByTestId("add-button"));
    expect(store.getActions()).toEqual([
      { type: "cart/updateQuantity", payload: { id: "1", quantity: 4 } },
    ]);
  });

  test("does not decrement quantity if count is 1", () => {
    render(
      <Provider store={store}>
        <QuantityControl count={1} itemId="1" />
      </Provider>
    );
    fireEvent.click(screen.getByTestId("remove-button"));
    expect(store.getActions()).toEqual([]);
  });

  test("decrements quantity when remove button is clicked", () => {
    render(
      <Provider store={store}>
        <QuantityControl count={3} itemId="1" />
      </Provider>
    );
    fireEvent.click(screen.getByTestId("remove-button"));
    expect(store.getActions()).toEqual([
      { type: "cart/updateQuantity", payload: { id: "1", quantity: 2 } },
    ]);
  });
});
