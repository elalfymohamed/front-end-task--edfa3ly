import styled from "@emotion/styled";

export const FilterColorStyled = styled.div`
  border-radius: 5px;
  border: 1px solid #000;
  padding: 5px 25px;
  margin: 20px 0;
`;

export const FilterColorTitle = styled.h5`
  margin: 0.3rem 0;
  font-size: 1rem;
  font-weight: 400;
`;

export const FilterColorContainer = styled.div`
  /* max-width: 130px; */
`;

export const FilterColorList = styled.ul`
  padding: 0;
  margin: 0;
  overflow-x: auto;
  height: 200px;
`;

export const FilterColorButtonDiv = styled.div`
  text-align: start;
`;

export const FilterColorButton = styled.button`
  background: transparent;
  border: none;
  color: #000;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  margin: 0;

  &:hover {
    color: #f00;
  }
`;
