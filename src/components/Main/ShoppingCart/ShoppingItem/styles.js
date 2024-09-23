import styled from "styled-components";

const ItemDiv = styled.div`
  background-color: #9b2d2d;
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px;
`;

const Quantity = styled.div`
  display: flex;
  gap: 10px;
  button {
    padding: 8px;
    border: none;
    cursor: pointer;
  }
`;

const DeleteButton = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #000;
  color: #eee;
  text-align: center;
`;
export { ItemDiv, Quantity, DeleteButton };
