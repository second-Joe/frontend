import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import OutlinedTextField from "./OutlinedTextField";
import SelectInput from "./SelectInput";

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
  width: 400,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PasswordCheck({ openModal, handleOpen, handleClose }) {
  const [open, setOpen] = React.useState(openModal);
  const [question, setQuestion] = React.useState("");

  const handleClose2 = () => {
    setOpen(false);
    handleClose();
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
              sx={{ mb: 5, px: 16 }}
              id="spring-modal-title"
              variant="h6"
              component="h2"
            >
              비밀번호 찾기
            </Typography>
            <Typography variant="h10" component="h4">
              아이디
            </Typography>
            <OutlinedTextField label="아이디를 입력해주세요" />
            <Typography variant="h10" component="h4">
              비밀번호 찾기 질문 선택
            </Typography>
            <SelectInput question={question} setQuestion={setQuestion} />
            <Typography variant="h10" component="h4">
              비밀번호 찾기 답변
            </Typography>
            <OutlinedTextField label="비밀번호 찾기 질문에 대한 답을 입력해주세요" />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
