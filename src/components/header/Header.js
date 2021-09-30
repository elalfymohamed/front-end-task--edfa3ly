import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  AppHeader,
  H1,
  P,
  ItemsCategory,
  Item,
  ItemTitle,
  ItemImage,
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
      <H1>Our e-commerce store</H1>
      <P>Choose one of our categories from below</P>
      <ItemsCategory>
        {getDataCategory.length < 0 ? (
          <p>Loading...</p>
        ) : (
          <>
            {getDataCategory.map((item) => (
              <Item key={item.id}>
                <ItemImage
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                />
                <a href="/">
                  <ItemTitle>{item.name}</ItemTitle>
                </a>
              </Item>
            ))}
          </>
        )}
      </ItemsCategory>
    </AppHeader>
  );
};

export default Header;
