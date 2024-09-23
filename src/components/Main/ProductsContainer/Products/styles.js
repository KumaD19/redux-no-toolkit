import styled from "styled-components";

const ProductStyled = styled.div`
  width: 150px;
  height: fit-content;
  padding: 10px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  background-color: #b47676;
  border-radius: 5px;
`;

const Button = styled.button`
  border: none;
  background-color: #000;
  color: #eee;
  cursor:pointer;
  padding:10px;
`;

export { ProductStyled, Button };
