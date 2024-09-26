import { Button, ButtonGroup } from "@mui/material";

import React from "react";

const Category = ({ category }) => {
  return (
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
      <Button color="secondary">{category}</Button>
    </ButtonGroup>
  );
};

export default Category;
