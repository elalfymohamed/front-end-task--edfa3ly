import { useState } from "react";

import { useDispatch } from "react-redux";

import { star } from "../../data/FilterStar";

import {
  filterProductsByState,
  cleanFilterProduct,
} from "../../redux/actions/actions";

import {
  FilterRatingStyled,
  FilterRatingTitle,
  FilterRatingContainer,
  FilterRatingList,
  FilterRatingItem,
  FilterRatingSpanIcon,
  FilterRatingDiv,
  FilterRatingButtonDiv,
  FilterRatingButton,
} from "./styled";

const FilterRating = () => {
  const [showClear, setShowClear] = useState(false);
  // useDispatch redux
  const dispatch = useDispatch();

  return (
    <FilterRatingStyled>
      <FilterRatingTitle>Average rating</FilterRatingTitle>
      <FilterRatingContainer>
        <FilterRatingList>
          {star.map((item) => (
            <FilterRatingItem key={item.id}>
              <FilterRatingDiv
                onClick={() => {
                  dispatch(filterProductsByState(item.rating));

                  setShowClear(true);
                }}
              >
                {item.starIcon.map((icon, i) => (
                  <FilterRatingSpanIcon key={i}>
                    {icon.icon}
                  </FilterRatingSpanIcon>
                ))}
              </FilterRatingDiv>
            </FilterRatingItem>
          ))}
        </FilterRatingList>
      </FilterRatingContainer>
      {showClear && (
        <FilterRatingButtonDiv>
          <FilterRatingButton
            onClick={() => {
              dispatch(cleanFilterProduct());
              setShowClear(false);
            }}
          >
            x clear
          </FilterRatingButton>
        </FilterRatingButtonDiv>
      )}
    </FilterRatingStyled>
  );
};

export default FilterRating;
