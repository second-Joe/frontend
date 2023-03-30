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
  const isMiddleScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="fixed" style={{ background: "#212121" }}>
      <Toolbar>
        {isMiddleScreen ? (
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={8} sx={{ ml: 5 }}>
              <Typography
                noWrap
                component="a"
                href="/login"
                sx={{
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
            <Grid item xs={1} sx={{ mr: 8 }}>
              <CustomerDropdown />
            </Grid>

            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <CustomerSearch />
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        ) : (
          <Grid container sx={{ pt: 2 }}>
            <Grid item xs={10} sx={{ ml: 5 }}>
              <Typography
                noWrap
                component="a"
                href="/login"
                sx={{
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
            <Grid item xs={1} sx={{ mr: 3 }}>
              <CustomerDropdown />
            </Grid>

            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <CustomerSearch />
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default StickyHeader;
