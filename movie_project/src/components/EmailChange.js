import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import OutlinedTextField from "./OutlinedTextField";
import CustomizedButton from "./CustomizedButton";
import axios from "axios";
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
  bgcolor: "black",
  border: "1px solid white",
  boxShadow: 24,
  p: 4,
};

export default function EmailChange({
  openModal,
  handleOpen,
  handleClose,
  setEmail,
}) {
  const [open, setOpen] = React.useState(openModal);
  const [newEmail, setNewEmail] = React.useState("");
  const [email2, setEmail2] = React.useState(
    window.sessionStorage.getItem("id")
  );

  const [idError, setIdError] = React.useState("");

  const handleClose2 = () => {
    handleClose();
    setOpen(false);
  };
  const isValidId = (id) => {
    const idRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return idRegex.test(id);
    // 이메일 주소의 유효성을 검사하는 코드를 작성한다.
    // 유효한 이메일 주소인 경우 true, 그렇지 않은 경우 false를 반환한다.
  };

  const idDuplicateCheck = () => {
    if (newEmail !== "") {
      if (isValidId(newEmail)) {
        axios
          .post("http://localhost:8080/idDuplicateCheck", {
            member_id: newEmail,
          })
          .then((res) => {
            console.log("idDuplicateCheck =>", res);
            if (res.data === 1) {
              setIdError("이메일이 중복됩니다.");
              return false;
            } else {
              setIdError("사용가능한 이메일입니다.");
              return true;
            }
          })
          .catch((e) => {
            console.error(e);
          });
      } else {
        setIdError("정확한 이메일 주소를 입력해주세요.");
      }
    } else {
      setIdError("이메일을 입력하세요.");
    }
  };

  const handleUpdate = () => {
    if (idError === "") {
      alert("이메일 중복확인 해주세요.");
      idDuplicateCheck();
      return false;
    } else if (idError === "이메일이 중복됩니다.") {
      return false;
    } else {
      if (isValidId(newEmail)) {
        axios
          .post("http://localhost:8080/emailUpdate", {
            member_id: email2,
            member_new_id: newEmail,
          })
          .then((res) => {
            console.log("emailUpdate =>", res);
            if (res.data === 1) {
              handleClose2();
              alert("이메일 주소 업데이트 성공!");
              if (
                window.localStorage.getItem("id") ===
                window.sessionStorage.getItem("id")
              ) {
                window.localStorage.setItem("id", newEmail);
              }
              window.sessionStorage.setItem("id", newEmail);

              setEmail(newEmail);
            } else {
              handleClose2();
              alert("이메일 주소 업데이트 실패!");
            }
          })
          .catch((e) => {
            console.error(e);
          });
      }
    }
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
              sx={{ width: 270, mx: "auto", mb: 3 }}
              id="spring-modal-title"
              variant="h5"
              component="h2"
            >
              이메일 주소 변경하기
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography
                sx={{ width: "150px", mr: 5, mt: 3 }}
                variant="h10"
                component="h4"
              >
                이메일 주소 입력
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <OutlinedTextField
                  value={newEmail}
                  onChange={setNewEmail}
                  isValidId={isValidId}
                  setIdError={setIdError}
                  label="변경할 이메일 주소를 입력해주세요"
                />
                <FormHelperText sx={{ mt: -2, fontSize: "1em", color: "red" }}>
                  {idError}
                </FormHelperText>
              </Box>
            </Box>

            <Box sx={{ display: "flex", mt: 2, ml: 47 }}>
              <Box sx={{ mr: 3 }}>
                <CustomizedButton
                  label="중복확인"
                  onClick={idDuplicateCheck}
                ></CustomizedButton>
              </Box>
              <CustomizedButton
                label="확인"
                value="updateDelete"
                onClick={handleUpdate}
              ></CustomizedButton>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
