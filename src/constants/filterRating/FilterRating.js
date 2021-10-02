import { useState } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";

import { BsStarFill } from "react-icons/bs";
import { FiStar } from "react-icons/fi";

import {
  filterProductsByState,
  clearFilterProduct,
} from "../../redux/actions/actions";

import {
  FilterRatingStyled,
  FilterRatingTitle,
  FilterRatingContainer,
  FilterRatingList,
  FilterRatingItem,
  FilterRatingDiv,
  FilterRatingButtonDiv,
  FilterRatingButton,
} from "./styled";

const Rating = ({ filterProductsByState, clearFilterProduct }) => {
  const [showClear, setShowClear] = useState(false);
  const star = [
    {
      id: 1,
      icon: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
      ],
      title: 5,
    },
    {
      id: 2,
      icon: [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <FiStar />,
      ],
      title: 4,
    },
    {
      id: 3,
      icon: [
        <BsStarFill />,
        <BsStarFill />,
        <FiStar />,
        <FiStar />,
        <FiStar />,
      ],
      title: 2,
    },
    {
      id: 4,
      icon: [<BsStarFill />, <FiStar />, <FiStar />, <FiStar />, <FiStar />],
      title: 1,
    },
  ];
  return (
    <FilterRatingStyled>
      <FilterRatingTitle>Average rating</FilterRatingTitle>
      <FilterRatingContainer>
        <FilterRatingList>
          {star.map((item) => (
            <FilterRatingItem key={item.id}>
              <FilterRatingDiv
                onClick={() =>
                  filterProductsByState(item.title) && setShowClear(true)
                }
              >
                {item.icon}
              </FilterRatingDiv>
            </FilterRatingItem>
          ))}
        </FilterRatingList>
      </FilterRatingContainer>
      {showClear && (
        <FilterRatingButtonDiv>
          <FilterRatingButton
            onClick={() => clearFilterProduct() && setShowClear(false)}
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
    clearFilterProduct: () => dispatch(clearFilterProduct()),
  };
};

Rating.propTypes = {
  filterProductsByState: PropTypes.func,
  clearFilterProduct: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Rating);
