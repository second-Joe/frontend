import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import CustomerDropdown from "../components/CustomerDropdown";
import CustomerSearch from "../components/CustomerSearch";

const StickyHeader = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="fixed" style={{ background: "#212121" }}>
      <Toolbar>
        <Grid container>
          <Grid item xs={10}>
            <Typography
              noWrap
              component="a"
              href="/login"
              sx={{
                mr: 2,
                fontFamily: "helvetica",
                fontWeight: 1000,
                letterSpacing: ".1rem",
                color: "red",
                textDecoration: "none",
                fontSize: "2.5em",
              }}
            >
              {isSmallScreen ? "N" : "NETFLIX"}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <CustomerDropdown />
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <CustomerSearch />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default StickyHeader;
