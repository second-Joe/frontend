import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

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

export default function CustomizedButton({ onClick }) {
  return (
    <BootstrapButton onClick={onClick} variant="contained" disableRipple>
      비밀번호 찾기
    </BootstrapButton>
  );
}
