import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, max-content));
  grid-gap: 15px;
  height:500px;
`;

export { Section };
