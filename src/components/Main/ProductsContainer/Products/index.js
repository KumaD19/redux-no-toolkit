import React from "react";
import { useDispatch } from "react-redux";
import { ProductStyled, Button } from "./styles";
import { addCart } from "../../../../actions";

const Products = ({ name, price, id }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addCart({ name, id, quantity: 1 }));
  };

  return (
    <ProductStyled>
      <p>{name}</p>
      <p>${price}</p>
      <Button onClick={handleAdd}>Add To Cart</Button>
    </ProductStyled>
  );
};

export default Products;
