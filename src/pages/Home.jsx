import React, { useEffect } from "react";
import Category from "../components/Category";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCategory, setProducts } from "../redux/action/productAction";
import { useSelector } from "react-redux";
import { Button, ButtonGroup, Grid2 } from "@mui/material";

const Home = () => {
  const { products } = useSelector((state) => state.productReducer);
  const { category } = useSelector((state) => state.categoryReducer);

  const dispatch = useDispatch();

  const getApi = async () => {
    const { data } = await axios("https://fakestoreapi.com/products");
    dispatch(setProducts(data));
  };

  useEffect(() => {
    getApi();
    getCategory();
  }, []);

  const getCategory = async () => {
    const { data } = await axios(
      "https://fakestoreapi.com/products/categories"
    );
    dispatch(setCategory(data));
  };

  return (
    <section>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1, // Butonlar arası boşluk
          my: 2, // Üstten boşluk
          borderRadius: 2, // Buton köşelerinin yumuşatılması
        }}
      >
        <Button> All</Button>
        {category?.map((category) => (
          <Category category={category} />
        ))}
      </ButtonGroup>

      <Grid2 container spacing={2}>
        {products?.map((product) => (
          <ProductCard product={product} />
        ))}
      </Grid2>
    </section>
  );
};

export default Home;
