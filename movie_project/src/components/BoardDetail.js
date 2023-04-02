import { Container, Paper, Typography, Box } from "@mui/material";
import StickyHeader from "./StickyHeader";
import CustomizedButton from "./CustomizedButton";
import BoardPasswordCheck from "./BoardPasswordCheck";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useMediaQuery, useTheme } from "@mui/material";

function BoardDetail() {
  const [openModal, setOpenModal] = useState(false);
  const [modify, setModify] = useState(false);
  const [remove, setRemove] = useState(false);
  const { board_num } = useParams();
  const [article, setArticle] = useState({
    member_id: "",
    board_title: "",
    board_content: "",
  });

  const navigate = useNavigate();

  const getDetail = () => {
    axios
      .get(`http://localhost:8080/customer/detail?board_num=${board_num}`)
      .then((res) => {
        const { data } = res;
        setArticle({
          member_id: data.member_id,
          board_title: data.board_title,
          board_content: data.board_content,
        });
      })
  }

  useEffect(() => {
    getDetail();
  }, []);

  const handleDelete = () => {
    axios
      .get(`http://localhost:8080/customer/delete?board_num=${board_num}`)
      .then(() => {
        navigate("/board")
      }).catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);

  const handleModify = () => {
    navigate(`/boardModify/${board_num}`)
  }



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
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: "16px" }}
          >
            {article.board_title}
          </Typography>
          <div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                height: "50vh",
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
                작성자 : <Box sx={{ ml: "8px" }}>{article.member_id}</Box>
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
                <Box sx={{ ml: "8px", flex: 1, width: "90%", height: "100%" }}>
                  {article.board_content}
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
                onClick={handleModify}
              ></CustomizedButton>
              &nbsp; &nbsp;
              <CustomizedButton
                label="삭제"
                value="delete"
                onClick={handleDelete}
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
        </Paper>
      </Container>
    </div>
  );
}

export default BoardDetail;