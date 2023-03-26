import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

export default function BoardInsertInput({ label }) {
  return <Input placeholder={label} inputProps={ariaLabel} />;
}
