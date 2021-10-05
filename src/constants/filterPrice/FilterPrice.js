import React, { useCallback, useEffect, useState, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

import { filterPrices, cleanFilterProduct } from "../../redux/actions/actions";

import {
  FilterPriceStyled,
  FilterPriceTitle,
  FilterPriceContainer,
  FilterPriceDiv,
  FilterPriceRangeLeft,
  FilterPriceRangeRight,
  FilterPriceInput,
  FilterRatingButtonDiv,
  FilterRatingButton,
} from "./styled";

const FilterPrice = () => {
  // useSelector redux
  const getDataProducts = useSelector((state) => state.dataReducer.dataProduct);
  // useDispatch
  const dispatch = useDispatch();
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
  const [showClear, setShowClear] = useState(false);
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
            max={max}
            min={min}
            onChange={(e) => {
              setMinVal(e.target.value);
              dispatch(filterPrices(e.target.value, maxVal));
              setShowClear(true);
            }}
            placeholder="From($)"
          />
          <FilterPriceInput
            type="number"
            name="minVal"
            max={max}
            min={min}
            value={maxVal}
            onChange={(e) => {
              setMaxVal(e.target.value);
              dispatch(filterPrices(minVal, e.target.value));
              setShowClear(true);
            }}
            placeholder="To($)"
          />
        </FilterPriceDiv>

        <FilterPriceRangeLeft
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
            dispatch(filterPrices(value, maxVal));
            setShowClear(true);
          }}
          className="thumb"
          style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <FilterPriceRangeRight
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
            dispatch(filterPrices(minVal, value));
            setShowClear(true);
          }}
          className="thumb"
        />
      </FilterPriceContainer>
      {showClear && (
        <FilterRatingButtonDiv>
          <FilterRatingButton
            onClick={() => {
              dispatch(cleanFilterProduct());
              setShowClear(true);
            }}
          >
            x clear
          </FilterRatingButton>
        </FilterRatingButtonDiv>
      )}
    </FilterPriceStyled>
  );
};

export default FilterPrice;
