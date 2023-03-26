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

export default function SignUp({ openSignUp, signUpOpen, signUpClose }) {
  const [open, setOpen] = React.useState(openSignUp);
  const [question, setQuestion] = React.useState("");

  const handleClose2 = () => {
    setOpen(false);
    signUpClose();
  };

  const handleSubmit = () => {};
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
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                아이디
              </Typography>
              <OutlinedTextField label="아이디를 입력해주세요" />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                비밀번호
              </Typography>
              <OutlinedTextField label="비밀번호를 입력해주세요" />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                비밀번호 확인
              </Typography>
              <OutlinedTextField label="비밀번호를 입력해주세요" />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                이름
              </Typography>
              <OutlinedTextField label="이름를 입력해주세요" />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                전화번호
              </Typography>
              <OutlinedTextField label="전화번호를 입력해주세요" />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                주소
              </Typography>
              <OutlinedTextField label="주소를 입력해주세요" />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                이메일
              </Typography>
              <OutlinedTextField label="이메일을 입력해주세요" />
            </Box>

            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                비밀번호 찾기 질문
              </Typography>
              <SelectInput question={question} setQuestion={setQuestion} />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                비밀번호 찾기 답변
              </Typography>

              <OutlinedTextField label="비밀번호 찾기 질문에 대한 답을 입력해주세요" />
            </Box>
            <Box sx={{ mx: "auto", width: 50 }}>
              <CustomizedButton
                label="회원가입"
                value="passwordAnswer"
                onClick={handleSubmit}
              ></CustomizedButton>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
