import React from "react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import BoardPasswordCheck from "./BoardPasswordCheck";
import BoardInsert from "../pages/BoardInsert";
import { useNavigate } from "react-router-dom";

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

  // const navigate = useNavigate();
  // const goBoardInsert = () => {
  //   navigate("/boardInsert");
  // };
  // const [openModal, setOpenModal] = React.useState(false);

  // const handleOpen = () => {
  //   setOpenModal(true);
  // };
  // const handleClose = () => {
  //   setOpenModal(false);
  // };
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
          <Button
            variant="outlined"
            sx={{
              ...buttonSx,
            }}
            // onClick={handleOpen}
          >
            문의 전화
          </Button>
          {/* {openModal ? (
            <BoardPasswordCheck
              openModal={openModal}
              setOpenModal={setOpenModal}
              handleOpen={handleOpen}
              handleClose={handleClose}
            ></BoardPasswordCheck>
          ) : null} */}
          <Button
            // onClick={goBoardInsert}
            variant="outlined"
            sx={{ ...buttonSx }}
          >
            실시간 채팅 시작하기
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default CustomerAsk;
