import {  useSelector } from "react-redux";
import { Grid2} from "@mui/material";
import BasketCards from "../components/BasketCards";
import EmptyBasketTotal from "../components/EmptyBasketTotal";
import FiiledBasketTotal from "../components/FiiledBasketTotal";

const Basket = () => {
  const { basket } = useSelector((state) => state.basketReducer);
  
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
      <FiiledBasketTotal />
    </>
  );
};

export default Basket;
