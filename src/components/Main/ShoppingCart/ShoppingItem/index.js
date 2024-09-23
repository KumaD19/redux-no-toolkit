import React from "react";
import { useDispatch } from "react-redux";
import { DeleteButton, ItemDiv, Quantity } from "./styles";
import { incrementItem, decrementItem, deleteCart } from "../../../../actions";
const ShoppingItem = ({ id, name, quantity, price }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = () => {
    dispatch(decrementItem(id));
  };

  const handleDelete = () => {
    dispatch(deleteCart(id));
  };

  return (
    <ItemDiv>
      <p>{name}</p>
      <Quantity>
        <button onClick={handleDecrement}>-</button>
        <p>{quantity}</p>
        <button onClick={handleIncrement}>+</button>
      </Quantity>
      <DeleteButton onClick={handleDelete}>Delete Item</DeleteButton>
    </ItemDiv>
  );
};

export default ShoppingItem;
