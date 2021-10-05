import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  AppHeader,
  Loading,
  HeaderTitle,
  HeaderP,
  HeaderItemsCategory,
  HeaderItem,
  HeaderItemImage,
  HeaderItemTitle,
} from "./styled";

import { setDataCategory } from "../../redux/actions/actions";

const Header = () => {
  // dispatch
  const dispatch = useDispatch();
  // get data from redux
  const getDataCategory = useSelector(
    (state) => state.dataReducer.dataCategory
  );

  // fetch data category
  useEffect(() => {
    const apiCategory = `http://test-api.edfa3ly.io/category`;

    fetch(apiCategory)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        dispatch(setDataCategory(data));
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <AppHeader>
      <HeaderTitle>Our e-commerce store</HeaderTitle>
      <HeaderP>Choose one of our categories from below</HeaderP>
      <HeaderItemsCategory>
        {Object.keys(getDataCategory).length === 0 ? (
          <Loading>Loading...</Loading>
        ) : (
          <>
            {getDataCategory.map((item) => (
              <HeaderItem key={item.id}>
                <HeaderItemImage
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                />
                <a href="/">
                  <HeaderItemTitle>{item.name}</HeaderItemTitle>
                </a>
              </HeaderItem>
            ))}
          </>
        )}
      </HeaderItemsCategory>
    </AppHeader>
  );
};

export default Header;
