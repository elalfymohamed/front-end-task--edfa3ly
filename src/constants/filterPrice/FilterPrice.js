import React, { useCallback, useEffect, useState, useRef } from "react";

import PropTypes from "prop-types";

import { connect, useSelector } from "react-redux";

import { filterMaxPrice, filterMinPrice } from "../../redux/actions/actions";

import {
  FilterPriceStyled,
  FilterPriceTitle,
  FilterPriceContainer,
  FilterPriceDiv,
  RangeLeft,
  RangeRight,
  FilterPriceInput,
} from "./styled";

const FilterPrice = ({ filterMaxPrice, filterMinPrice }) => {
  const getDataProducts = useSelector((state) => state.dataReducer.dataProduct);
  // get the max price in data
  let max = Math.max.apply(
    Math,
    getDataProducts.map((o) => o.price)
  );
  // get the min price in data
  let min = Math.min.apply(
    Math,
    getDataProducts.map((o) => o.price)
  );
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <FilterPriceStyled>
      <FilterPriceTitle>Price range</FilterPriceTitle>
      <FilterPriceContainer>
        <FilterPriceDiv>
          <FilterPriceInput
            type="number"
            name="minVal"
            value={minVal}
            onChange={(e) =>
              setMinVal(e.target.value) || filterMinPrice(e.target.value)
            }
            placeholder="From($)"
          />
          <FilterPriceInput
            type="number"
            name="minVal"
            value={maxVal}
            onChange={(e) =>
              setMaxVal(e.target.value) || filterMaxPrice(e.target.value)
            }
            placeholder="To($)"
          />
        </FilterPriceDiv>

        <RangeLeft
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
            filterMinPrice(value);
          }}
          className="thumb"
          style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <RangeRight
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
            filterMaxPrice(value);
          }}
          className="thumb"
        />
      </FilterPriceContainer>
    </FilterPriceStyled>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterMaxPrice: (maxPrice) => dispatch(filterMaxPrice(maxPrice)),
    filterMinPrice: (minPrice) => dispatch(filterMinPrice(minPrice)),
  };
};

FilterPrice.propTypes = {
  filterMaxPrice: PropTypes.func,
  filterMinPrice: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(FilterPrice);
