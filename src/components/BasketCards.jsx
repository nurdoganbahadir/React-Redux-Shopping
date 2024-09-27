import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { Grid2 } from "@mui/material";
import { useDispatch } from "react-redux";
import { arttir, azalt, remove } from "../redux/action/basketAction";

const BasketCards = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Grid2 xs={6} md={3}>
      <Card sx={{ width: "200px", height: "370px" }}>
        <CardMedia
          component="img"
          height="200"
          image={item.image}
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
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {item.price} $
          </Typography>
        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
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
        </CardActions>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="contained"
            sx={{ backgroundColor: "red", margin: "auto" }}
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
