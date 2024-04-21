// src/components/Header.tsx
import React from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./Menu";


const Header: React.FC = () => {
  const image = "./festival-don-quijote-logo-final.png";

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar position="static" sx={{ height: "30px" }}>
      <Toolbar
        sx={{
          display: "flex",
          backgroundColor: "#30316A",
        }}
        disableGutters
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ alignItems: "center", ml: 1, color: "white" }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {Menu(toggleDrawer)}
        </Drawer>
        <img
          src={image}
          alt="logo"
          style={{
            //make logo responsive to screen size
            width: "auto",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            filter: "invert(1) grayscale(1) brightness(2)"
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
