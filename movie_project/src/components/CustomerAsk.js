import React from "react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import BoardInsert from "../pages/BoardInsert";
import { useNavigate } from "react-router-dom";
import CustomizedButton from "./CustomizedButton";

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

  const navigate = useNavigate();

  const gotoBoard = () => {
    navigate("/board");
  };
  const gotoFAQ = () => {
    navigate("/customercenter/board");
  };
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
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography flexGrow="1" sx={{ fontSize: 24, fontWeight: "bold" }}>
            고객 센터에 문의하시겠어요?
          </Typography>
          <Box sx={{ mr: 3 }}>
            <CustomizedButton
              onClick={gotoFAQ}
              label="자주 묻는 질문들"
            ></CustomizedButton>
          </Box>
          {/* {openModal ? (
            <BoardPasswordCheck
              openModal={openModal}
              setOpenModal={setOpenModal}
              handleOpen={handleOpen}
              handleClose={handleClose}
            ></BoardPasswordCheck>
          ) : null} */}
          <CustomizedButton onClick={gotoBoard} label="문의하기">
            실시간 채팅 시작하기
          </CustomizedButton>
        </Box>
      </Container>
    </div>
  );
};

export default CustomerAsk;
