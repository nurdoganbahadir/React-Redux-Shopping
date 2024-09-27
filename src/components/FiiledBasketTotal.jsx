import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyBasket } from "../redux/action/basketAction";

const FiiledBasketTotal = () => {
  const dispatch = useDispatch();

  const { basket } = useSelector((state) => state.basketReducer);
  const totalPrice = basket.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <Box
      component="section"
      sx={{ p: 2, display: "flex", justifyContent: "space-between" }}
    >
      <Typography variant="h6" sx={{ color: "text.secondary" }}>
        Basket Total Price: ${totalPrice.toFixed(2)}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(emptyBasket())}
        sx={{ backgroundColor: "#00838f" }}
      >
        empty cart
      </Button>
    </Box>
  );
};

export default FiiledBasketTotal;
