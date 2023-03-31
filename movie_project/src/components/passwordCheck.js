import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import OutlinedTextField from "./OutlinedTextField";
import SelectInput from "./SelectInput";
import CustomizedButton from "./CustomizedButton";
import { useRef, useState } from "react";
import FormHelperText from "@mui/material/FormHelperText";
import axios from "axios";
import PasswordChange from "./PasswordChange";

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
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  width: 560,
  bgcolor: "black",
  border: "1px solid white",
  boxShadow: 24,
  p: 4,
};

export default function PasswordCheck({ openModal, handleOpen, handleClose }) {
  const emailRef = useRef();
  const pwQuestionRef = useRef();
  const pwAnswerRef = useRef();

  const [open, setOpen] = React.useState(openModal);
  const [question, setQuestion] = React.useState("");

  const [email, setEmail] = useState("");
  //email 상태값 업데이트
  const [emailError, setEmailError] = useState("");

  const [passwordSearch, setPasswordSearch] = useState(true);
  const [openPwModal, setOpenPwModal] = React.useState(false);

  const handlePwOpen = () => {
    setOpenPwModal(true);
  };
  const handlePwClose = () => {
    setOpenPwModal(false);
  };

  const handleClose2 = () => {
    setOpen(false);
    handleClose();
  };

  const passwordSubmit = () => {
    // axios
    //   .post("/passwordSearch", {
    //     member_id: emailRef.current.value,
    //     pw_question: pwQuestionRef.current.value,
    //     pw_answer: pwAnswerRef.current.value,
    //   })
    //   .then((res) => {
    //     console.log("passwordSearch =>", res);
    //     if (res !== null) {
    //       setPasswordSearch(true);
    //     } else {
    //       alert("관련 정보 없음!");
    //     }
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
    // 이메일 주소의 유효성을 검사하는 코드를 작성한다.
    // 유효한 이메일 주소인 경우 true, 그렇지 않은 경우 false를 반환한다.
  };

  const handlePasswordCheck = (event) => {
    event.preventDefault();
    let validEmail = /\S+@\S+.\S+/.test(email);

    if (!email) {
      setEmailError("이메일을 입력해주세요.");
      emailRef.current.focus();
    } else if (!validEmail) {
      setEmailError("정확한 이메일 주소를 입력해주세요.");
      emailRef.current.focus();
    }

    if (validEmail) {
      passwordSubmit();
    }
  };
  const handleEmailChange = (event) => {
    console.log(event);
    setEmail(event.target.value);
    // setEmail 함수를 이용해 email 상태값을 업데이트한다.

    setEmailError(
      isValidEmail(event.target.value)
        ? ""
        : "정확한 이메일 주소를 입력해주세요."
    );
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
          backdrop: {
            TransitionComponent: Fade,
          },
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
              비밀번호 찾기
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                이메일 주소
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <OutlinedTextField
                  ref1={emailRef}
                  value={email}
                  onChange={handleEmailChange}
                  label="이메일 주소를 입력해주세요"
                />
                <FormHelperText sx={{ mt: -3, mb: 2, color: "red" }}>
                  {emailError}
                </FormHelperText>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                비밀번호 찾기 질문
              </Typography>
              <SelectInput
                ref1={pwQuestionRef}
                question={question}
                setQuestion={setQuestion}
              />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                비밀번호 찾기 답변
              </Typography>

              <OutlinedTextField
                ref1={pwAnswerRef}
                label="비밀번호 찾기 질문에 대한 답을 입력해주세요"
              />
            </Box>
            <Box sx={{ mx: "auto", width: 50 }}>
              <CustomizedButton
                label="찾기"
                value="passwordAnswer"
                onClick={handlePasswordCheck}
              ></CustomizedButton>
            </Box>
            {passwordSearch ? (
              <PasswordChange
                openModal={openPwModal}
                setOpenModal={setOpenPwModal}
                handleOpen={handlePwOpen}
                handleClose={handlePwClose}
              />
            ) : null}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
