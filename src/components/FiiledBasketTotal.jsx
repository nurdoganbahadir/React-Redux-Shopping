import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { emptyBasket } from "../redux/action/basketAction";

const FiiledBasketTotal = () => {
  const dispatch = useDispatch();
  return (
    <Box
      component="section"
      sx={{ p: 2, display: "flex", justifyContent: "space-between" }}
    >
      <Typography variant="h6" sx={{ color: "text.secondary" }}>
        Basket Total Price:
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(emptyBasket())}
      >
        empty cart
      </Button>
    </Box>
  );
};

export default FiiledBasketTotal;
