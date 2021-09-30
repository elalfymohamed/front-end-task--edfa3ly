import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setDataProducts } from "../../redux/actions/actions";

import {
  MainDiv,
  Section,
  Container,
  ContentProduct,
  Content,
  Image,
  Stars,
  H3,
  Price,
  SpanSymbol,
  SpanWhole,
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
    <MainDiv>
      <Filters />
      <Section>
        <Container>
          {getDataProducts.map((item) => (
            <ContentProduct key={item.id}>
              <Content>
                <a href="/">
                  <Image src={item.image} alt={item.name} />
                  <H3>{item.name}</H3>
                </a>
                <div>
                  <Stars stars={item.rating}>
                    <span>{item.rating}</span>
                  </Stars>
                  <Price>
                    <SpanSymbol>$</SpanSymbol>
                    <SpanWhole>{numberWithCommas(item.price)}</SpanWhole>
                  </Price>
                </div>
              </Content>
            </ContentProduct>
          ))}
        </Container>
      </Section>
    </MainDiv>
  );
};

export default Hero;
