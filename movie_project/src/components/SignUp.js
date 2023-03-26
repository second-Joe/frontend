import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import SelectInput from "./SelectInput";
import CustomizedButton from "./CustomizedButton";
import { useState } from "react";
import { TextField } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  width: 560,
  height: 700,
  bgcolor: "black",
  border: "1px solid white",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
};

const formStyle = {
  my: 1,
  width: "360px",
  color: "white",
  background: "#38393b",
  border: "1.5px solid white",
  fontSize: "20px",
  borderRadius: 1,
};
const inputFormStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
};

export default function SignUp({ openSignUp, signUpOpen, signUpClose }) {
  const [open, setOpen] = React.useState(openSignUp);
  const [question, setQuestion] = React.useState("");

  const handleClose2 = () => {
    setOpen(false);
    signUpClose();
  };
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [addr, setAddr] = useState("");
  const [tel, setTel] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [idError, setIdError] = useState("");
  const [nameError, setNameError] = useState("");
  const [addrError, setAddrError] = useState("");
  const [pwCheckError, setPwCheckError] = useState("");
  const [telError, setTelError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const isValidId = (id) => {
    const idRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return idRegex.test(id);
    // 이메일 주소의 유효성을 검사하는 코드를 작성한다.
    // 유효한 이메일 주소인 경우 true, 그렇지 않은 경우 false를 반환한다.
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
    // 이메일 주소의 유효성을 검사하는 코드를 작성한다.
    // 유효한 이메일 주소인 경우 true, 그렇지 않은 경우 false를 반환한다.
  };

  const isValidPassword = (password) => {
    const passwordRegex = password.length >= 4 && password.length <= 60;
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
  const handleIdChange = (event) => {
    setId(event.target.value);
    // setEmail 함수를 이용해 email 상태값을 업데이트한다.
    setIdError(
      isValidId(event.target.value) ? "" : "정확한 이메일 주소를 입력해주세요."
    );
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // setPassword 함수를 이용해 password 상태값을 업데이트한다.
    setPasswordError(
      isValidPassword(event.target.value)
        ? ""
        : "비밀번호는 4~60자 사이여야 합니다."
    );
  };

  const handleAddrChange = (event) => {
    setAddr(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTelChange = (event) => {
    setTel(event.target.value);
  };
  const handlePwCheckChange = (event) => {
    setPwCheck(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
    }
    let validEmail = /\S+@\S+.\S+/.test(email);
    let validId = /\S+@\S+.\S+/.test(id);
    let validPassword = password.length >= 4 && password.length <= 60;
    if (!id) {
      setIdError("이메일을 입력해주세요.");
    } else if (!validId) {
      setIdError("정확한 이메일 주소를 입력해주세요.");
    }
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
    } else if (!validEmail) {
      setEmailError("정확한 이메일 주소를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    } else if (!validPassword) {
      setPasswordError("비밀번호는 4~60자 사이여야 합니다.");
    }
    if (!name) {
      setNameError("이름을 입력해주세요.");
    }
    if (!tel) {
      setTelError("전화번호를 입력해주세요.");
    }
    if (!addr) {
      setAddrError("주소를 입력해주세요.");
    }
    if (!pwCheck) {
      setPwCheckError("비밀번호 확인 답변을 입력해주세요.");
    }
    // if (validEmail && validPassword) {
    //   window.location.href = "/login";
    // }
  };
  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose2}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {},
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              sx={{ width: 160, mx: "auto", mb: 3 }}
              id="spring-modal-title"
              variant="h5"
              component="h2"
            >
              회원가입
            </Typography>
            <Box sx={inputFormStyle}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                아이디
              </Typography>
              <TextField
                label="아이디를 입력해주세요"
                type="email"
                value={id}
                onChange={handleIdChange}
                required
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                sx={formStyle}
              />
              <FormHelperText sx={{ padding: "1px", color: "red" }}>
                {idError}
              </FormHelperText>
              {/* <CustomizedButton
                label="중복확인"
                value="check"
              ></CustomizedButton> */}
            </Box>
            <Box sx={inputFormStyle}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                비밀번호
              </Typography>
              <TextField
                label="비밀번호를 입력해주세요"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                sx={formStyle}
              />
              <FormHelperText sx={{ color: "red" }}>
                {passwordError}
              </FormHelperText>
            </Box>
            <Box sx={inputFormStyle}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                비밀번호 확인
              </Typography>
              <TextField
                sx={formStyle}
                required
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                label="비밀번호를 입력해주세요"
                type="password"
                value={ConfirmPassword}
                onChange={onConfirmPasswordHandler}
              />
            </Box>
            <Box sx={inputFormStyle}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                이름
              </Typography>
              <TextField
                label="이름을 입력해주세요"
                type="text"
                value={name}
                onChange={handleNameChange}
                required
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                sx={formStyle}
              />
              <FormHelperText sx={{ color: "red" }}>{nameError}</FormHelperText>
            </Box>
            <Box sx={inputFormStyle}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                전화번호
              </Typography>
              <TextField
                label="전화번호를 입력해주세요"
                required
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                sx={formStyle}
                value={tel}
                onChange={handleTelChange}
              />
              <FormHelperText sx={{ color: "red" }}>{telError}</FormHelperText>
            </Box>
            <Box sx={inputFormStyle}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                주소
              </Typography>
              <TextField
                label="주소를 입력해주세요"
                required
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                sx={formStyle}
                value={addr}
                onChange={handleAddrChange}
              />

              <FormHelperText sx={{ color: "red" }}>{addrError}</FormHelperText>
            </Box>
            <Box sx={inputFormStyle}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                이메일
              </Typography>
              <TextField
                required
                value={email}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                label="이메일을 입력해주세요"
                onChange={handleEmailChange}
                sx={formStyle}
              />
              <FormHelperText sx={{ padding: "1px", color: "red" }}>
                {emailError}
              </FormHelperText>
            </Box>

            <Box sx={inputFormStyle}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                비밀번호 찾기 질문
              </Typography>
              <SelectInput question={question} setQuestion={setQuestion} />
            </Box>
            <Box sx={inputFormStyle}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                비밀번호 찾기 답변
              </Typography>

              <TextField
                label="비밀번호 찾기 질문에 대한 답"
                required
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                sx={formStyle}
                value={pwCheck}
                onChange={handlePwCheckChange}
              />
              <FormHelperText sx={{ color: "red" }}>
                {pwCheckError}
              </FormHelperText>
            </Box>
            <Box sx={{ mx: "auto", width: 100 }}>
              <CustomizedButton
                label="회원가입"
                onClick={handleSubmit}
              ></CustomizedButton>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
