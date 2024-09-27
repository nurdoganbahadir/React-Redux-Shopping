import { Button } from "@mui/material";

import React from "react";
import { setCategory } from "../redux/action/productAction";
import { useDispatch } from "react-redux";

const Category = ({ category }) => {
  const dispatch = useDispatch();
  return (
    <Button color="secondary" onClick={() => dispatch(setCategory(category))}>
      {category}
    </Button>
  );
};

export default Category;
