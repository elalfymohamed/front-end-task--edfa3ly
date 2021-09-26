import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {} from "./styled";

import { set_data_products } from "../../redux/actions/actions";

const Hero = () => {
  const apiProducts = `http://test-api.edfa3ly.io/product`;
  const dispatch = useDispatch();
  const getDataProducts = useSelector((state) => state.dataReducer.dataProduct);

  const fetchProducts = async () => {
    fetch(apiProducts)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        dispatch(set_data_products(data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <section>
      <div></div>
    </section>
  );
};

export default Hero;
