import React from "react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const CustomerAsk = () => {
  const buttonSx = {
    color: "black",
    borderColor: "black",
    m: 2,
    borderRadius: 0,
    fontWeight: "bold",
  };
  const body = document.getElementById("body");
  body.style.margin = 0;
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        height: "80px",
        m: 0,
      }}
    >
      <Container float>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: 2,
            mb: 2,
          }}
        >
          <Typography flexGrow="1" sx={{ fontSize: 24, fontWeight: "bold" }}>
            고객 센터에 문의하시겠어요?
          </Typography>
          <Button
            variant="outlined"
            sx={{
              ...buttonSx,
            }}
          >
            문의 전화
          </Button>
          <Button variant="outlined" sx={{ ...buttonSx }}>
            실시간 채팅 시작하기
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default CustomerAsk;
