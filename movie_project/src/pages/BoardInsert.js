import * as React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import BoardInsertInput from "../components/BoardInsertInput";
import BoardInsertMultiline from "../components/BoardInsertMultiline";
import StickyHeader from "../components/StickyHeader";
import CustomizedButton from "../components/CustomizedButton";
import { useNavigate } from "react-router-dom";

export default function BoardInsert() {
  const handleSubmit = () => {};
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/customerCenter");
  };
  return (
    <div>
      <StickyHeader></StickyHeader>
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
            sx={{ width: "150px", mr: 5, mt: 3, fontWeight: "bold" }}
            variant="h6"
            component="h4"
          >
            이름
          </Typography>
          <BoardInsertInput label="이름"></BoardInsertInput>
        </Box>
        <Box
          sx={{
            display: "flex",
            pb: 1,
          }}
        >
          <Typography
            sx={{ width: "150px", mr: 5, mt: 3, fontWeight: "bold" }}
            variant="h6"
            component="h4"
          >
            제목
          </Typography>
          <BoardInsertInput label="제목"></BoardInsertInput>
        </Box>
        <Box
          sx={{
            display: "flex",
            pb: 1,
          }}
        >
          <Typography
            sx={{ width: "150px", mr: 1, mt: 3, fontWeight: "bold" }}
            variant="h6"
            component="h4"
          >
            내용
          </Typography>
          <BoardInsertMultiline></BoardInsertMultiline>
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
              onClick={handleSubmit}
            ></CustomizedButton>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
