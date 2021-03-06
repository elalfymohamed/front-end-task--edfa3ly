import styled from "@emotion/styled";

export const FilterPriceStyled = styled.div`
  border-radius: 5px;
  border: 1px solid #000;
  padding: 5px 25px;
  margin-top: 10px;
`;

export const FilterPriceTitle = styled.h5`
  margin: 0.3rem 0;
  font-size: 1rem;
  font-weight: 400;
`;

export const FilterPriceContainer = styled.div`
  margin-bottom: 2rem;
`;

export const FilterPriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

export const FilterPriceInput = styled.input`
  width: 68px;
  height: 25px;
  margin-bottom: 1rem;
  border: 1px solid #000;
  border-radius: 2px;
  font-size: 0.8rem;
  padding: 0.2rem;
`;

export const FilterPriceRangeRight = styled.input`
  pointer-events: none;
  position: absolute;
  height: 2px;
  width: 170px;
  outline: none;
  background-color: #000;
  z-index: 4;
`;

export const FilterPriceRangeLeft = styled.input`
  pointer-events: none;
  position: absolute;
  height: 2px;
  width: 170px;
  outline: none;
  background-color: #000;
  z-index: 3;
`;

export const FilterRatingButtonDiv = styled.div`
  text-align: start;
`;

export const FilterRatingButton = styled.button`
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
