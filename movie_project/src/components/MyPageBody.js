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

const MyPageBody = () => {
  const [passwordSearch, setPasswordSearch] = useState(false);
  const [email, setEmail] = useState(window.sessionStorage.getItem("id"));
  const [tel, setTel] = useState("");
  const [pw, setPw] = useState("");

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
  return (
    <Container sx={{ paddingTop: "100px" }}>
      <Typography sx={{ fontSize: 35, mb: 2 }}>계정</Typography>
      <Divider />
      <Grid container sx={{ m: 1 }}>
        <Grid item xs={3} sx={{ fontSize: 19, color: "gray" }}>
          멤버십 & 결제 정보
        </Grid>
        <Grid item xs={9} sx={{ direction: "column" }}>
          <Grid container>
            <Grid item xs={8} sx={{ pl: 2, pt: 3, color: "gray" }}>
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
            <Grid item xs={8} sx={{ pl: 2, pt: 3, color: "gray" }}>
              비밀번호 : {pw}
            </Grid>
            <Grid item xs={2} sx={{ p: 2 }}>
              <Box sx={{ width: "200%" }}>
                <CustomizedButton
                  label="비밀번호 변경  "
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
            <Grid item xs={8} sx={{ pl: 2, pt: 3, color: "gray" }}>
              휴대폰 번호 : {tel}
            </Grid>
            <Grid item xs={3} sx={{ p: 2 }}>
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
        <Grid item xs={3} sx={{ fontSize: 19, color: "gray" }}>
          멤버십 상세 정보
        </Grid>
        <Grid item xs={9} sx={{ direction: "column" }}>
          <Grid container>
            <Grid item xs={9} sx={{ p: 2 }}>
              스트리밍 멤버십에 가입하지 않으셨습니다.
            </Grid>
            <Grid item xs={3} sx={{ p: 2 }}>
              <Typography
                sx={{ fontSize: 14, mb: 3, color: "blue", textAlign: "right" }}
              >
                스트리밍 멤버십 추가
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider />

      <Grid container sx={{ m: 1 }}>
        <Grid item xs={3} sx={{ fontSize: 19, color: "gray" }}>
          프로필 & 자녀 보호 설정
        </Grid>
        <Grid item xs={9} sx={{ direction: "column" }}>
          <Grid container>
            <Grid item xs={1}>
              <AccountBoxIcon sx={{ fontSize: 80 }} />
            </Grid>
            <Grid item xs={11}>
              <Typography
                sx={{
                  pl: 2,
                  display: "flex",
                  alignItems: "center",
                  height: "80px",
                  fontWeight: "bold",
                }}
              >
                유저 이름
              </Typography>
            </Grid>
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
    </Container>
  );
};

export default MyPageBody;
