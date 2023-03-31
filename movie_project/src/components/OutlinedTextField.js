import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import { useRef } from "react";

// function MyFormHelperText() {
//   const { focused } = useFormControl() || {};

//   const helperText = React.useMemo(() => {
//     if (focused) {
//       return "This field is being focused";
//     }

//     return "Helper text";
//   }, [focused]);

//   return <FormHelperText>{helperText}</FormHelperText>;
// }

export default function OutlinedTextField({
  label,
  ref1,
  value,
  onChange,
  setIdError,
  isValidId,
  setPasswordError,
  isValidPassword,
  setTelError,
  isValidatePhone,
}) {
  const changeVal = (e) => {
    console.log(e.target.value);

    if (label === "변경할 이메일 주소를 입력해주세요") {
      onChange(e.target.value);
      setIdError(
        isValidId(e.target.value) ? "" : "정확한 이메일 주소를 입력해주세요."
      );
      if (e.target.value === "") {
        setIdError("이메일 주소를 입력해주세요.");
      }
    } else if (label === "변경할 비밀번호를 입력해주세요") {
      onChange(e.target.value);
      setPasswordError(
        isValidPassword(e.target.value)
          ? ""
          : "비밀번호는 4~20자 사이여야 합니다."
      );
      if (e.target.value === "") {
        setPasswordError("비밀번호를 입력해주세요.");
      }
    } else if (label === "변경할 휴대폰 번호를 입력해주세요") {
      onChange(
        e.target.value
          .replace(/[^0-9]/g, "")
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})(\d{0,1})$/g, "$1-$2-$3")
          .replace(/(\-{1,2})$/g, "")
      );
      setTelError(
        isValidatePhone(e.target.value) ? "" : "올바른 휴대폰 번호를 입력하세요"
      );

      if (e.target.value === "") {
        setTelError("");
      }
    }
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: 360, mb: 3 }}>
        <OutlinedInput
          required
          ref={ref1}
          onChange={changeVal}
          value={value}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          sx={{ my: 1, background: "#38393b", border: "1.5px solid white" }}
          placeholder={label}
        />
        {/* <MyFormHelperText /> */}
      </FormControl>
    </Box>
  );
}
