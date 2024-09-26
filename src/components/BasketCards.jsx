import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Grid2 } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { arttir, azalt, remove } from "../redux/action/basketAction";

const BasketCards = ({ item }) => {
  const { sayac } = useSelector((state) => state.basketReducer);
  const dispatch = useDispatch();
  return (
    <Grid2 size={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.price}$
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(arttir(item.id))}
          >
            +
          </Button>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {item.quantity}
          </Typography>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(azalt(item.id))}
          >
            -
          </Button>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => dispatch(remove(item.id))}
          >
            REMOVE
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  );
};

export default BasketCards;
