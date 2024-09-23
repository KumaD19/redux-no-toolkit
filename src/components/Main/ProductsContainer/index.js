import Products from "./Products";
import { Section } from "./styles";

const listOfProducts = [
  {
    id: 1,
    name: "Shampoo",
    price: 4.5,
  },
  {
    id: 2,
    name: "Soap",
    price: 3,
  },
  {
    id: 3,
    name: "Cake mix",
    price: 4,
  },
  {
    id: 4,
    name: "Water Bottle",
    price: 2.5,
  },
  {
    id: 5,
    name: "Steak",
    price: 10,
  },
];

const ProductsContainer = () => {
  return (
    <Section>
      {listOfProducts.map((product) => {
        const { id, name, price } = product;
        return <Products name={name} key={id} price={price} id={id}></Products>;
      })}
    </Section>
  );
};

export default ProductsContainer;
