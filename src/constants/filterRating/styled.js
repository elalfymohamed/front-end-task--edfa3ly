import styled from "@emotion/styled";

export const FilterRatingStyled = styled.div`
  border-radius: 5px;
  border: 1px solid #000;
  padding: 5px 25px;
  margin-top: 10px;
`;

export const FilterRatingTitle = styled.h5`
  margin: 0.3rem 0;
  font-size: 1rem;
  font-weight: 400;
`;

export const FilterRatingContainer = styled.div`
  max-width: 130px;
`;

export const FilterRatingList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const FilterRatingItem = styled.li`
  text-align: center;
  margin-bottom: 2px;
`;

export const FilterRatingDiv = styled.div`
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ffa41c;
    margin-right: 4px;
  }
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
