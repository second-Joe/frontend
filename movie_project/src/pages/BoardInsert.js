import * as React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import BoardInsertInput from "../components/BoardInsertInput";
import BoardInsertMultiline from "../components/BoardInsertMultiline";
import StickyHeader from "../components/StickyHeader";
import TextField from "@mui/material/TextField";
import CustomizedButton from "../components/CustomizedButton";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function BoardInsert() {
  const [board_title, setTitle] = useState("");
  const [member_id, setWriter] = useState("");
  const [board_content, setContent] = useState("");
  const [board_pw, setpassword] = useState("");
  const handleSubmit = () => {};
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/board");
  };
  const titleChange = (event) => {
    setTitle(event.target.value);
    console.log(board_title);
  };

  const writerChange = (event) => {
    setWriter(event.target.value);
    console.log(member_id);
  };

  const contentChange = (event) => {
    setContent(event.target.value);
    console.log(board_content);
  };

  const passwordChange = (event) => {
    setpassword(event.target.value);
    console.log(board_pw);
  };

  const handleInsert = () => {
    axios
      .post("http://localhost:8080/customer/insert", {
        member_id: window.sessionStorage.getItem("id"),
        board_title: board_title,
        board_content: board_content,
      })
      .then((res) => {
        console.log("handleInsert=>", res);
        navigate("/board");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <StickyHeader />
      <Paper sx={{ padding: "16px", height: "100vh" }}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
            paddingTop: "250px",
            width: 800,
            mx: "auto",
          }}
          noValidate
          autoComplete="off"
        >
          <Box
            sx={{
              display: "flex",
              pb: 1,
            }}
          >
            <Typography
              sx={{ width: "150px", mr: 3, mt: 1, fontWeight: "bold" }}
              variant="h6"
              component="h4"
            >
              작성자
            </Typography>
            <Input
              sx={{ width: "100%" }}
              placeholder="작성자"
              onChange={writerChange}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              pb: 1,
            }}
          >
            <Typography
              sx={{ width: "150px", mr: 3, mt: 1, fontWeight: "bold" }}
              variant="h6"
              component="h4"
            >
              제목
            </Typography>
            <Input
              sx={{ width: "100%" }}
              placeholder="제목"
              onChange={titleChange}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              pb: 1,
            }}
          >
            <Typography
              sx={{ width: "150px", mr: 3, mt: 1, fontWeight: "bold" }}
              variant="h6"
              component="h4"
            >
              비밀번호
            </Typography>
            <Input
              sx={{ width: "100%" }}
              type="password"
              placeholder="비밀번호"
              onChange={passwordChange}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              pb: 1,
            }}
          >
            <Typography
              sx={{ width: "140px", mt: 3, fontWeight: "bold" }}
              variant="h6"
              component="h4"
            >
              내용
            </Typography>
            <TextField
              sx={{ width: 630, mt: 3 }}
              id="outlined-multiline-static"
              multiline
              rows={10}
              placeholder="내용을 입력하세요"
              onChange={contentChange}
            />
          </Box>
          <Box sx={{ display: "flex", ml: "auto" }}>
            <Box sx={{ width: 100, ml: 79, mr: 3 }}>
              <CustomizedButton
                label="취소"
                value="cancel"
                onClick={goBack}
              ></CustomizedButton>
            </Box>
            <Box sx={{ width: 100 }}>
              <CustomizedButton
                label="확인"
                value="insert"
                onClick={handleInsert}
              ></CustomizedButton>
            </Box>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
