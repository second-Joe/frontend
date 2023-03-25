import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "This field is being focused";
    }

    return "Helper text";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function OutlinedTextField({ label }) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: "90%", mb: 3 }}>
        <OutlinedInput placeholder={label} />
        {/* <MyFormHelperText /> */}
      </FormControl>
    </Box>
  );
}