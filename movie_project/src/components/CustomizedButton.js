import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { red, common } from "@mui/material/colors";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#dd1923",
  borderColor: "#cc2c24",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#f94449",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#f94449",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(221,25,35,.5)",
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[800]),
  backgroundColor: red[800],
  "&:hover": {
    backgroundColor: common[900],
  },
}));

export default function CustomizedButton({ onClick }) {
  return (
    <BootstrapButton onClick={onClick} variant="contained" disableRipple>
      비밀번호 찾기
    </BootstrapButton>
  );
}
