import * as React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import BoardInsertInput from "../components/BoardInsertInput";
import BoardInsertMultiline from "../components/BoardInsertMultiline";

export default function BoardInsert() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        sx={{ width: "150px", mr: 5, mt: 3 }}
        variant="h10"
        component="h4"
      >
        이름
      </Typography>
      <BoardInsertInput label="이름"></BoardInsertInput>
      <Typography
        sx={{ width: "150px", mr: 5, mt: 3 }}
        variant="h10"
        component="h4"
      >
        제목
      </Typography>
      <BoardInsertInput label="제목"></BoardInsertInput>
      <Typography
        sx={{ width: "150px", mr: 5, mt: 3 }}
        variant="h10"
        component="h4"
      >
        내용
      </Typography>
      <BoardInsertMultiline></BoardInsertMultiline>
    </Box>
  );
}
