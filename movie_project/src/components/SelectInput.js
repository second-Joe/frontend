import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectInput({ question, setQuestion }) {
  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, mb: 3 }}>
      <FormControl fullWidth>
        <InputLabel
          sx={{
            color: "white",

            pt: 1,
            mt: -1,
            fontSize: "20px",
          }}
          id="simple-select-label"
        >
          Password Questions
        </InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={question}
          label="passwordQuestions"
          onChange={handleChange}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          sx={{
            my: 1,
            width: 360,
            background: "#38393b",
            border: "1.5px solid white",
            color: "white",
          }}
        >
          <MenuItem value="자신의 보물 제1호는?">자신의 보물 제1호는?</MenuItem>
          <MenuItem value="추억하고 싶은 날짜가 있다면?">
            추억하고 싶은 날짜가 있다면?
          </MenuItem>
          <MenuItem value="인상 깊게 읽은 책 이름은?">
            인상 깊게 읽은 책 이름은?
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
