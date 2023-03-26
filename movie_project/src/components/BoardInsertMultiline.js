import * as React from "react";
import TextField from "@mui/material/TextField";

export default function BoardInsertMultiline() {
  return (
    <div>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
      />
    </div>
  );
}
