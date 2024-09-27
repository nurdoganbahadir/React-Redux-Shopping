import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/action/basketAction";
import { Grid2 } from "@mui/material";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Grid2 item xs={6} md={3}>
      <Card sx={{ width: "170px", height: "460px" }}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1, // Bir satırda gösterilecek
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              height: "160px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 5, // Üç satırda gösterilecek
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="outlined"
            sx={{ margin: "auto", backgroundColor: "#e0e0e0" }}
            onClick={() => dispatch(addToBasket(product))}
          >
            BASKET
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  );
};

export default ProductCard;
