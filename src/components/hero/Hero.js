import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setDataProducts } from "../../redux/actions/actions";

import {
  HeroMainDiv,
  HeroSection,
  Loading,
  HeroContainer,
  HeroContentProduct,
  HeroItem,
  HeroItemImage,
  HeroItemTitle,
  HeroItemStars,
  HeroItemPrice,
  HeroItemSpanSymbol,
  HeroItemSpanWhole,
} from "./styled";

import Filters from "../filter/Filters";

const Hero = () => {
  // dispatch
  const dispatch = useDispatch();
  // get data from redux
  const getDataProducts = useSelector(
    (state) => state.dataReducer.filterProducts
  );
  // number with commas
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  // fetch data products
  useEffect(() => {
    const apiProducts = `http://test-api.edfa3ly.io/product`;

    fetch(apiProducts)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        dispatch(setDataProducts(data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <HeroMainDiv>
      <Filters />
      <HeroSection>
        <HeroContainer>
          {Object.keys(getDataProducts).length === 0 ? (
            <Loading>Loading...</Loading>
          ) : (
            <>
              {getDataProducts.map((item) => (
                <HeroContentProduct key={item.id}>
                  <HeroItem>
                    <a href="/">
                      <HeroItemImage src={item.image} alt={item.name} />
                      <HeroItemTitle>{item.name}</HeroItemTitle>
                    </a>
                    <div>
                      <HeroItemStars stars={item.rating}>
                        <span>{item.rating}</span>
                      </HeroItemStars>
                      <HeroItemPrice>
                        <HeroItemSpanSymbol>$</HeroItemSpanSymbol>
                        <HeroItemSpanWhole>
                          {numberWithCommas(item.price)}
                        </HeroItemSpanWhole>
                      </HeroItemPrice>
                    </div>
                  </HeroItem>
                </HeroContentProduct>
              ))}
            </>
          )}
        </HeroContainer>
      </HeroSection>
    </HeroMainDiv>
  );
};

export default Hero;
