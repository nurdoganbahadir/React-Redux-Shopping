import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { basket } = useSelector((state) => state.basketReducer);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bahadir Shopping
          </Typography>
          <Button color="inherit" variant="outlined">
            <LocalGroceryStoreIcon />
            {basket.length}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
