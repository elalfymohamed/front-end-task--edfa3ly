import { useState } from "react";

import PropTypes from "prop-types";

import { connect, useSelector } from "react-redux";

import {
  filterProductsByColor,
  clearFilterProduct,
} from "../../redux/actions/actions";

import {
  FilterColorStyled,
  FilterColorTitle,
  FilterColorContainer,
  FilterColorList,
  FilterColorButtonDiv,
  FilterColorButton,
} from "./styled";

const FilterColor = ({ filterProductsByColor, clearFilterProduct }) => {
  const [colors, setColors] = useState([]);

  const getDataProducts = useSelector((state) => state.dataReducer.dataProduct);

  const colorsData = Array.from(
    new Set(getDataProducts.map((item) => item.color))
  );

  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

  const getSelected = () => {
    let result = [];
    checkBoxes.forEach((item) => {
      if (item.checked) {
        let data = item.value;
        result = data;
      }
    });
    setColors(result);
  };

  const selectAll = () => {
    checkBoxes.forEach((item) => {
      item.checked = false;
    });
  };

  return (
    <FilterColorStyled>
      <FilterColorTitle>Color</FilterColorTitle>
      <div>
        <button
          disabled={colors.length === 0 ? true : false}
          onClick={() => filterProductsByColor(colors)}
        >
          Enter color
        </button>
      </div>
      <FilterColorContainer>
        <FilterColorList>
          {colorsData.map((item, index) => (
            <li key={index}>
              <div onClick={() => getSelected()}>
                <input id={item} type="checkbox" value={item} />
                <label htmlFor={item}>{item}</label>
              </div>
            </li>
          ))}
        </FilterColorList>
      </FilterColorContainer>
      {colors.length > 0 && (
        <FilterColorButtonDiv>
          <FilterColorButton
            type="button"
            role="clear"
            onClick={() =>
              (clearFilterProduct() && selectAll()) || setColors([])
            }
          >
            x clear
          </FilterColorButton>
        </FilterColorButtonDiv>
      )}
    </FilterColorStyled>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterProductsByColor: (color) => dispatch(filterProductsByColor(color)),
    clearFilterProduct: () => dispatch(clearFilterProduct()),
  };
};

FilterColor.propTypes = {
  filterProductsByColor: PropTypes.func,
  clearFilterProduct: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(FilterColor);
