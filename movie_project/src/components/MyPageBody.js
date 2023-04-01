import React from "react";
import Container from "@mui/material/Container";
import { Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CustomizedButton from "./CustomizedButton";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OutlinedTextField from "./OutlinedTextField";
import EmailChange from "./EmailChange";
import PasswordChange from "./PasswordChange";
import PhoneChange from "./PhoneChange";
import axios from "axios";
import { useMediaQuery, useTheme } from "@mui/material";

const MyPageBody = () => {
  const theme = useTheme();
  const [passwordSearch, setPasswordSearch] = useState(false);
  const [email, setEmail] = useState(window.sessionStorage.getItem("id"));
  const [tel, setTel] = useState("");
  const [pw, setPw] = useState("");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isxSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isMiddleScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [user, setUser] = React.useState(window.sessionStorage.getItem("id"));
  const [userName, setUserName] = React.useState("");

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post("/selectMember", {
        member_id: user,
      })
      .then((res) => {
        console.log("selectMember =>", res);
        if (res.data !== null) {
          setUserName(res.data.member_name);
          // alert("정보 확인 성공!");
        } else {
          alert("정보 확인 실패!");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  useEffect(() => {
    axios
      .post("/selectMember", {
        member_id: email,
      })
      .then((res) => {
        console.log("selectMember =>", res);
        if (res.data !== null) {
          setTel(res.data.member_tel);
          setPw(res.data.member_pw);
          // alert("정보 확인 성공!");
        } else {
          alert("정보 확인 실패!");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, [email, tel, pw]);

  const [openEmailModal, setOpenEmailModal] = React.useState(false);
  const [openPwModal, setOpenPwModal] = React.useState(false);
  const [openPhoneModal, setOpenPhoneModal] = React.useState(false);

  const handleEmailOpen = () => {
    setOpenEmailModal(true);
  };
  const handleEmailClose = () => {
    setOpenEmailModal(false);
  };

  const handlePwOpen = () => {
    setOpenPwModal(true);
  };
  const handlePwClose = () => {
    setOpenPwModal(false);
  };

  const handlePhoneOpen = () => {
    setOpenPhoneModal(true);
  };
  const handlePhoneClose = () => {
    setOpenPhoneModal(false);
  };

  const deleteAccount = () => {
    axios
      .post("/deleteMember", {
        member_id: email,
      })
      .then((res) => {
        console.log("deleteMember =>", res);
        if (res.data === 1) {
          alert("회원 탈퇴되었습니다.");
          window.sessionStorage.clear();
          window.localStorage.clear();
          navigate("/", { return: true });
        } else {
          alert("회원 탈퇴 실패!");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const deleteLoginInfo = () => {
    window.localStorage.clear();
    if (window.localStorage.getItem("id") === null) {
      alert("로그인 정보가 삭제되었습니다!");
    } else {
      alert("로그인 정보가 삭제 실패!");
    }
  };

  return (
    <Container sx={{ paddingTop: "100px" }}>
      <Typography sx={{ fontSize: 35, mb: 2 }}>계정</Typography>
      <Divider />
      <Grid container sx={{ m: 1 }}>
        {isSmallScreen ? (
          <Grid
            item
            xs={12}
            sx={{ fontSize: 19, color: "black", mb: 3, fontWeight: "bold" }}
          >
            멤버십 & 결제 정보
          </Grid>
        ) : (
          <Grid
            item
            xs={3}
            sx={{ fontSize: 19, color: "black", fontWeight: "bold" }}
          >
            멤버십 & 결제 정보
          </Grid>
        )}

        <Grid item xs={9} sx={{ direction: "column" }}>
          <Grid container>
            <Grid item xs={9} sx={{ pl: 2, pt: 3, color: "gray" }}>
              이메일 주소 : {email}
            </Grid>
            <Grid item xs={2} sx={{ p: 2 }}>
              <Box sx={{ width: 200 }}>
                <CustomizedButton
                  label="이메일 주소 변경"
                  value="emailChange"
                  onClick={handleEmailOpen}
                ></CustomizedButton>
                {openEmailModal ? (
                  <EmailChange
                    value="이메일 주소"
                    openModal={openEmailModal}
                    setOpenModal={setOpenEmailModal}
                    handleOpen={handleEmailOpen}
                    handleClose={handleEmailClose}
                    setEmail={setEmail}
                  ></EmailChange>
                ) : null}
              </Box>
            </Grid>
            <Grid item xs={9} sx={{ pl: 2, pt: 3, color: "gray" }}>
              비밀번호 : {pw}
            </Grid>
            <Grid item xs={2} sx={{ p: 2 }}>
              <Box sx={{ width: "200%" }}>
                <CustomizedButton
                  label="비밀번호 변경"
                  value="passwordChange"
                  onClick={handlePwOpen}
                ></CustomizedButton>
                {openPwModal ? (
                  <PasswordChange
                    label="마이페이지 비밀번호 변경"
                    openPwModal={openPwModal}
                    setOpenPwModal={setOpenPwModal}
                    handlePwOpen={handlePwOpen}
                    handlePwClose={handlePwClose}
                    setPasswordSearch={setPasswordSearch}
                    setPw={setPw}
                  ></PasswordChange>
                ) : null}
              </Box>
            </Grid>
            <Grid item xs={9} sx={{ pl: 2, pt: 3, color: "gray" }}>
              휴대폰 번호 : {tel}
            </Grid>
            <Grid item xs={2} sx={{ p: 2 }}>
              <Box sx={{ width: 200, mb: 2 }}>
                <CustomizedButton
                  label="휴대폰 번호 등록"
                  value="phoneChange"
                  onClick={handlePhoneOpen}
                ></CustomizedButton>
                {openPhoneModal ? (
                  <PhoneChange
                    value="휴대폰 번호"
                    openModal={openPhoneModal}
                    setOpenModal={setOpenPhoneModal}
                    handleOpen={handlePhoneOpen}
                    handleClose={handlePhoneClose}
                    setTel={setTel}
                  ></PhoneChange>
                ) : null}
              </Box>
            </Grid>
          </Grid>
          <Divider />
          <Grid container>
            <Grid item xs={10} sx={{ p: 2 }}>
              결제 정보가 없습니다
            </Grid>
            <Grid item xs={2} sx={{ p: 2 }}></Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider />

      <Grid container sx={{ m: 1 }}>
        {isSmallScreen ? (
          <Grid
            item
            xs={12}
            sx={{ fontSize: 19, color: "black", mb: 3, fontWeight: "bold" }}
          >
            멤버십 상세 정보
          </Grid>
        ) : (
          <Grid
            item
            xs={3}
            sx={{ fontSize: 19, color: "black", fontWeight: "bold" }}
          >
            멤버십 상세 정보
          </Grid>
        )}

        <Grid item xs={9} sx={{ direction: "column" }}>
          {isSmallScreen ? (
            <Grid container>
              <Grid item xs={12} sx={{ p: 2 }}>
                스트리밍 멤버십에 가입하지 않으셨습니다.
              </Grid>
            </Grid>
          ) : (
            <Grid container>
              <Grid item xs={9} sx={{ p: 2 }}>
                스트리밍 멤버십에 가입하지 않으셨습니다.
              </Grid>
              <Grid item xs={3} sx={{ pr: 2 }}>
                <Typography
                  sx={{
                    fontSize: 14,
                    mr: 5,
                    mb: 3,
                    color: "blue",
                    textAlign: "right",
                  }}
                >
                  스트리밍 멤버십 추가
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>

      <Divider />

      <Grid container sx={{ m: 1 }}>
        {isSmallScreen ? (
          <Grid
            item
            xs={12}
            sx={{ fontSize: 19, color: "black", mb: 3, fontWeight: "bold" }}
          >
            프로필 & 자녀 보호 설정
          </Grid>
        ) : (
          <Grid
            item
            xs={3}
            sx={{ fontSize: 19, color: "black", fontWeight: "bold" }}
          >
            프로필 & 자녀 보호 설정
          </Grid>
        )}

        <Grid item xs={9} sx={{ direction: "row" }}>
          <Grid container>
            <Box sx={{ display: "flex" }}>
              <AccountBoxIcon sx={{ fontSize: 80 }} />
              <Typography
                sx={{
                  pl: 2,
                  display: "flex",
                  alignItems: "center",
                  height: "80px",
                  fontWeight: "bold",
                }}
              >
                {userName}
              </Typography>
            </Box>
            <Grid></Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider />
      <Grid container sx={{ m: 1 }}>
        <Grid item xs={3} sx={{ fontSize: 19, color: "gray" }}>
          설정
        </Grid>
        <Grid item xs={9} sx={{ color: "blue" }}>
          마케팅 커뮤니케이션
        </Grid>
      </Grid>
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "end", mt: 5 }}>
        <Box sx={{ mr: 3 }}>
          <CustomizedButton
            label="로그인 정보 삭제하기"
            onClick={deleteLoginInfo}
          ></CustomizedButton>
        </Box>
        <Box>
          <CustomizedButton
            label="탈퇴하기"
            onClick={deleteAccount}
          ></CustomizedButton>
        </Box>
      </Box>
    </Container>
  );
};

export default MyPageBody;
