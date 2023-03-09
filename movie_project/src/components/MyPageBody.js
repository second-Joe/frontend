import React from "react";
import Container from "@mui/material/Container";
import { Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const MyPageBody = () => {
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
            <Grid item xs={10} sx={{ p: 2, color: "gray" }}>
              비밀번호: ********
            </Grid>
            <Grid item xs={2} sx={{ p: 2 }}>
              <Typography
                sx={{ fontSize: 14, mb: 2, color: "blue", textAlign: "right" }}
              >
                이메일 주소 변경
              </Typography>
              <Typography
                sx={{ fontSize: 14, mb: 2, color: "blue", textAlign: "right" }}
              >
                비밀번호 변경
              </Typography>
              <Typography
                sx={{ fontSize: 14, mb: 2, color: "blue", textAlign: "right" }}
              >
                휴대폰 번호 등록
              </Typography>
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
