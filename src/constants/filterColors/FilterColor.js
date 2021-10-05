import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  filterProductsByColor,
  cleanFilterProduct,
} from "../../redux/actions/actions";

import {
  FilterColorStyled,
  FilterColorTitle,
  FilterColorContainer,
  FilterColorList,
  FilterColorButtonDiv,
  FilterColorButton,
} from "./styled";

const FilterColor = () => {
  const [colors, setColors] = useState([]);
  // useSelector redux
  const getDataProducts = useSelector((state) => state.dataReducer.dataProduct);
  // useDispatch redux
  const dispatch = useDispatch();
  // get item color in data
  const colorsData = Array.from(
    new Set(getDataProducts.map((item) => item.color))
  );
  // querySelectorAll('input[type="checkbox"]')
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  // get value of checkbox if checked or not
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
  // set false all checkbox
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
          onClick={() => dispatch(filterProductsByColor(colors))}
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
            onClick={() => {
              dispatch(cleanFilterProduct());
              selectAll();
              setColors([]);
            }}
          >
            x clear
          </FilterColorButton>
        </FilterColorButtonDiv>
      )}
    </FilterColorStyled>
  );
};

export default FilterColor;
