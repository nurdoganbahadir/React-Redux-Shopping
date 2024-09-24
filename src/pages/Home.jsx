import React, { useEffect, useState } from "react";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/action/productAction";
import { useSelector } from "react-redux";

const Home = () => {
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const getApi = async () => {
    const { data } = await axios("https://fakestoreapi.com/products");
    dispatch(setProducts(data));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <section>
      <Category />
      {products?.map((product) => (
        <ProductCard product={product} />
      ))}
    </section>
  );
};

export default Home;
