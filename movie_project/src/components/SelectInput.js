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
        <InputLabel id="demo-simple-select-label">
          Password Questions
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={question}
          label="Age"
          onChange={handleChange}
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
