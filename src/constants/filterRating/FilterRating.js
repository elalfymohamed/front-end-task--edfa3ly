import { useState } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";

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

const FilterRating = ({ filterProductsByState, cleanFilterProduct }) => {
  const [showClear, setShowClear] = useState(false);
  return (
    <FilterRatingStyled>
      <FilterRatingTitle>Average rating</FilterRatingTitle>
      <FilterRatingContainer>
        <FilterRatingList>
          {star.map((item) => (
            <FilterRatingItem key={item.id}>
              <FilterRatingDiv
                onClick={() => {
                  filterProductsByState(item.rating);
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
              cleanFilterProduct();
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

const mapDispatchToProps = (dispatch) => {
  return {
    filterProductsByState: (rating) => dispatch(filterProductsByState(rating)),
    cleanFilterProduct: () => dispatch(cleanFilterProduct()),
  };
};

FilterRating.propTypes = {
  filterProductsByState: PropTypes.func,
  cleanFilterProduct: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(FilterRating);
