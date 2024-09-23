import React from "react";
import { useSelector } from "react-redux";
import ShoppingItem from "./ShoppingItem";
import { Section } from "./styles";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.products.cart);

  return (
    <Section>
      {cartItems.map((item) => {
        const { id, name, quantity } = item;

        return (
          <ShoppingItem key={id} id={id} name={name} quantity={quantity} />
        );
      })}
    </Section>
  );
};

export default ShoppingCart;
