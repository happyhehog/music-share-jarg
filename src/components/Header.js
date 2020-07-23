import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { HeadsetRounded } from "@material-ui/icons";
import headerStyles from "../materialStyles/HeaderStyles";

function Header() {
  const classes = headerStyles();

  return (
    <AppBar color="primary" position="fixed">
      <Toolbar>
        <HeadsetRounded />
        <Typography className={classes.title} variant="h5">
          JARG Music Share
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
