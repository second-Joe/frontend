import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormHelperText from "@mui/material/FormHelperText";
import PasswordCheck from "../components/passwordCheck";
import CustomizedButton from "../components/CustomizedButton";
import SignUp from "../components/SignUp";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const emailRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  //email 상태값 업데이트
  const [password, setPassword] = useState("");
  //password 상태값 업데이트
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
    // 이메일 주소의 유효성을 검사하는 코드를 작성한다.
    // 유효한 이메일 주소인 경우 true, 그렇지 않은 경우 false를 반환한다.
  };

  const isValidPassword = (password) => {
    const passwordRegex = password.length >= 4 && password.length <= 20;
    return passwordRegex;
    // 패스워드의 유효성을 검사하는 코드를 작성한다.
    // 유효한 패스워드인 경우 true, 그렇지 않은 경우 false를 반환한다.
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // setEmail 함수를 이용해 email 상태값을 업데이트한다.
    setEmailError(
      isValidEmail(event.target.value)
        ? ""
        : "정확한 이메일 주소를 입력해주세요."
    );
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // setPassword 함수를 이용해 password 상태값을 업데이트한다.
    setPasswordError(
      isValidPassword(event.target.value)
        ? ""
        : "비밀번호는 4~20자 사이여야 합니다."
    );
  };

  const checkSubmit = (event) => {
    event.preventDefault();
    let validEmail = /\S+@\S+.\S+/.test(email);
    let validPassword = password.length >= 4 && password.length <= 60;
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
      emailRef.current.focus();
    } else if (!validEmail) {
      setEmailError("정확한 이메일 주소를 입력해주세요.");
      emailRef.current.focus();
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      pwRef.current.focus();
    } else if (!validPassword) {
      setPasswordError("비밀번호는 4~20자 사이여야 합니다.");
      pwRef.current.focus();
    }
    if (validEmail && validPassword) {
      handleLogin();
    }
  };

  const handleLogin = () => {
    axios
      .post("/selectMember", {
        member_id: email,
      })
      .then((res) => {
        console.log(res);
        if (res.data !== "") {
          axios
            .post("/login", {
              member_id: email,
              member_pw: password,
            })
            .then((res) => {
              console.log("handleLogin =>", res);
              if (res.data === 1) {
                window.sessionStorage.setItem("id", email);
                navigate("/login");
              } else {
                alert("비밀번호가 다릅니다!");
                navigate("/");
              }
            })
            .catch((e) => {
              console.error(e);
            });
        } else {
          alert("일치하는 로그인 정보가 없습니다!");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const [openSignUp, setOpenSignUp] = React.useState(false);

  const signUpOpen = () => {
    setOpenSignUp(true);
  };
  const signUpClose = () => {
    setOpenSignUp(false);
  };

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        marginTop: "25vh",
        padding: "300px",
        paddingTop: "220px",
        background: "black",
        color: "white",
        borderRadius: "15px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
        width: "100%",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: "16px" }}>
          로그인
        </Typography>
        <TextField
          margin="normal"
          label="이메일 주소"
          type="email"
          name="email"
          fullWidth
          variant="outlined"
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          sx={{ my: 1, background: "#38393b", border: "1.5px solid white" }}
          required
          value={email}
          onChange={handleEmailChange}
          // 이메일 주소 입력란의 값이 변경될때마다 이 함수가 호출됨
          ref={emailRef}
        />
        <FormHelperText sx={{ padding: "1px", color: "red" }}>
          {emailError}
        </FormHelperText>

        <TextField
          label="비밀번호"
          type="password"
          autoComplete="current-password"
          required
          fullWidth
          variant="outlined"
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          sx={{ my: 1, background: "#38393b", border: "1.5px solid white" }}
          value={password}
          onChange={handlePasswordChange}
          ref={pwRef}
        />

        <FormHelperText sx={{ color: "red" }}>{passwordError}</FormHelperText>

        <Typography sx={{ display: "flex", alignItems: "center", mt: "16px" }}>
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                sx={{
                  "&.Mui-checked": {
                    color: "white",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  },
                }}
              />
            }
            label="로그인 정보 저장"
            sx={{ mr: "auto" }}
          />
          <Box sx={{ ml: "400px" }}>
            <CustomizedButton
              label="비밀번호 찾기"
              value="비밀번호 찾기"
              onClick={handleOpen}
            ></CustomizedButton>
            {openModal ? (
              <PasswordCheck
                openModal={openModal}
                setOpenModal={setOpenModal}
                handleOpen={handleOpen}
                handleClose={handleClose}
              ></PasswordCheck>
            ) : null}
          </Box>
        </Typography>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ background: "#e50914", mt: "24px", mb: "16px" }}
          onClick={checkSubmit}
        >
          로그인
        </Button>

        <Typography lg={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ background: "#e50914", mt: "24px", mb: "16px" }}>
            <CustomizedButton
              label="지금 가입하세요"
              value="지금 가입하세요"
              onClick={signUpOpen}
            ></CustomizedButton>
            {openSignUp ? (
              <SignUp
                openSignUp={openSignUp}
                setOpenSignUp={setOpenSignUp}
                signUpOpen={signUpOpen}
                signUpClose={signUpClose}
              ></SignUp>
            ) : null}
          </Box>
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;
