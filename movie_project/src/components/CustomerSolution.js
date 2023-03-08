import React from "react";
import SolutionList from "./SolutionList";
import { Container, Grid } from "@mui/material";

const CustomerSolution = () => {
  return (
    <Container>
      <Grid container spacing={1} sx={{ width: "100%", overflowX: "hidden" }}>
        <Grid item xs={2}>
          <SolutionList>CustomerSolution</SolutionList>
        </Grid>
        <Grid item xs={2}>
          <SolutionList>CustomerSolution</SolutionList>
        </Grid>
        <Grid item xs={2}>
          <SolutionList>CustomerSolution</SolutionList>
        </Grid>
        <Grid item xs={2}>
          <SolutionList>CustomerSolution</SolutionList>
        </Grid>
        <Grid item xs={2}>
          <SolutionList>CustomerSolution</SolutionList>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomerSolution;
