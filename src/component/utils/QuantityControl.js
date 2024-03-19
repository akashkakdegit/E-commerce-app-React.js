import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../store/cartSlice";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import "./QuantityControl.css";

const QuantityControl = ({ count, itemId }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: itemId, quantity: count + 1 }));
  };

  const handleDecrease = () => {
    if (count > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: count - 1 }));
    }
  };
  return (
    <div className="items-add-remove-button">
      <IoMdRemove onClick={handleDecrease} data-testid={'remove-button'}/>
      <span>{count}</span>
      <IoMdAdd onClick={handleIncrease} data-testid={'add-button'}/>
    </div>
  );
};

export default QuantityControl;
