import { useDispatch, useSelector } from "react-redux";
import { Button, Grid2 } from "@mui/material";
import BasketCards from "../components/BasketCards";
import EmptyBasketTotal from "../components/EmptyBasketTotal";
import { emptyBasket } from "../redux/action/basketAction";

const Basket = () => {
  const { basket } = useSelector((state) => state.basketReducer);
  const dispatch = useDispatch();
  console.log(basket);

  return (
    <>
      {basket.length === 0 ? (
        <EmptyBasketTotal />
      ) : (
        <Grid2
          container
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          my={4}
        >
          {basket?.map((item) => (
            <BasketCards item={item} key={basket.id} />
          ))}
        </Grid2>
      )}
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(emptyBasket())}
      >
        Empty Cart
      </Button>
    </>
  );
};

export default Basket;
