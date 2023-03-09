import React from "react";
import PersonalHelpCard from "./PersonalHelpCard";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import Box from "@mui/material/Box";

const CustomerPersonal = () => {
  return (
    <Container sx={{ paddingTop: "200px" }}>
      <Typography
        variant={"h1"}
        sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
        fontWeight="bold"
      >
        유저 님, 안녕하세요.
      </Typography>
      <PersonalHelpCard />
      <Typography variant="h6" sx={{ mt: 3, mb: 3 }}>
        도움이 될 만한 문서
      </Typography>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item>
          <Card sx={{ display: "flex", width: "auto", height: 40 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: 1,
              }}
            >
              <DescriptionIcon sx={{ m: 1 }} />
              <Typography
                style={{ whiteSpace: "nowrap", display: "flex" }}
                fontWeight="bold"
              >
                넷플릭스에 가입하는 방법
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ display: "flex", width: "auto", height: 40 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: 1,
              }}
            >
              <DescriptionIcon sx={{ m: 1 }} />
              <Typography
                style={{ whiteSpace: "nowrap", display: "flex" }}
                fontWeight="bold"
              >
                멤버십 및 요금
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ display: "flex", width: "auto", height: 40 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: 1,
              }}
            >
              <DescriptionIcon sx={{ m: 1 }} />
              <Typography style={{ display: "flex" }} fontWeight="bold">
                넷플릭스에 로그인할 수 없는 경우
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomerPersonal;
