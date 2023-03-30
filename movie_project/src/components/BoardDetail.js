import { Container, Paper, Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import StickyHeader from "./StickyHeader";
import { posts } from "./BoardList";
import CustomizedButton from "./CustomizedButton";
import { useNavigate } from "react-router-dom";
import BoardPasswordCheck from "./BoardPasswordCheck";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

export default function BoardDetail() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);
  const [openModal, setOpenModal] = React.useState(false);
  const [modify, setModify] = React.useState(false);
  const [remove, setRemove] = React.useState(false);

  const navigate = useNavigate();
  const clickModify = () => {
    handleOpen();
    setModify(true);
  };
  const clickDelete = () => {
    handleOpen();
    setRemove(true);
  };
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const goBack = () => {
    navigate("/board");
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMiddleScreen = useMediaQuery(theme.breakpoints.down("md"));

  let paddingTop = "200px";
  if (isSmallScreen) {
    paddingTop = "140px";
  }
  return (
    <div>
      <StickyHeader />
      <Container sx={{ paddingTop: { paddingTop } }}>
        <Paper sx={{ padding: "16px" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: "16px" }}>
            {post && post.id === id ? post.title : "게시글을 찾을 수 없습니다."}
          </Typography>
          {post && post.id === id ? (
            <div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  height: "100%",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: "8px",
                    fontWeight: "bold",
                    flexShrink: 0,
                  }}
                >
                  작성자 : <Box sx={{ ml: "8px" }}>{post.author}</Box>
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    mb: "8px",
                    fontWeight: "bold",
                    flexShrink: 0,
                  }}
                >
                  내용&nbsp;&nbsp; &nbsp;:
                  <Box
                    sx={{ ml: "8px", flex: 1, width: "90%", height: "100%" }}
                  >
                    {post.content}
                  </Box>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <CustomizedButton
                  label="뒤로가기"
                  value="goBack"
                  onClick={goBack}
                ></CustomizedButton>
                &nbsp; &nbsp;
                <CustomizedButton
                  label="수정"
                  value="update"
                  onClick={clickModify}
                ></CustomizedButton>
                &nbsp; &nbsp;
                <CustomizedButton
                  label="삭제"
                  value="delete"
                  onClick={clickDelete}
                ></CustomizedButton>
              </Box>
              {openModal ? (
                <BoardPasswordCheck
                  modify={modify}
                  remove={remove}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                ></BoardPasswordCheck>
              ) : null}
            </div>
          ) : null}
        </Paper>
      </Container>
    </div>
  );
}
