import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import plusbtn from "../plusbtn.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import Typography from "material-ui/Typography";
// import { withStyles } from "material-ui/styles";

const Profiles = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/login");
  };
  return (
    <div style={{ backgroundColor: "rgb(42, 43, 43)" }}>
      <div
        style={{
          color: "white",
          fontSize: "3em",
          textAlign: "center",
          paddingTop: "120px",
        }}
      >
        넷플릭스를 시청할 프로필을 선택하세요.
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          marginTop: "70px",
        }}
      >
        <Box
          sx={{ flexGrow: 1 }}
          style={{
            margin: "0 auto",
            width: "1200px",
            height: "250px",
          }}
        >
          <Grid container spacing={5} minHeight={160}>
            <Grid
              xs
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                sx={{
                  boxSizing: "border-box",
                  "&:hover": {
                    opacity: [0.9, 0.8, 0.7],
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  onClick={goHome}
                  component="img"
                  sx={{
                    width: 180,
                    height: 180,
                    maxHeight: { xs: 180, md: 180 },
                    maxWidth: { xs: 180, md: 180 },
                    boxSizing: "border-box",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                      cursor: "pointer",
                      border: "5px solid white",
                      color: "white",
                    },
                  }}
                  alt="Netflix profile icon"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                />
                <h1
                  style={{
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  user1
                </h1>
              </Box>
              <Box
                sx={{
                  boxSizing: "border-box",
                  "&:hover": {
                    opacity: [0.9, 0.8, 0.7],
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  onClick={goHome}
                  component="img"
                  sx={{
                    width: 180,
                    height: 180,
                    maxHeight: { xs: 180, md: 180 },
                    maxWidth: { xs: 180, md: 180 },
                    boxSizing: "border-box",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                      cursor: "pointer",
                      border: "5px solid white",
                    },
                  }}
                  alt="Netflix profile icon"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
                />
                <h1
                  style={{
                    color: "white",
                    textAlign: "center",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                      cursor: "pointer",
                      border: "5px solid white",
                    },
                  }}
                >
                  user2
                </h1>
              </Box>
              <Box
                sx={{
                  boxSizing: "border-box",
                  "&:hover": {
                    opacity: [0.9, 0.8, 0.7],
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  onClick={goHome}
                  component="img"
                  sx={{
                    width: 180,
                    height: 180,
                    maxHeight: { xs: 180, md: 180 },
                    maxWidth: { xs: 180, md: 180 },
                    boxSizing: "border-box",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                      cursor: "pointer",
                      border: "5px solid white",
                    },
                  }}
                  alt="Netflix profile icon"
                  src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/50e8272e1fac95db8aa33e34_rw_600.png?h=5c620938ca992743e815e0c3629f52d9"
                />
                <h1
                  style={{
                    color: "white",
                    textAlign: "center",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                      cursor: "pointer",
                      border: "5px solid white",
                    },
                  }}
                >
                  user3
                </h1>
              </Box>
              <Box
                sx={{
                  boxSizing: "border-box",
                  "&:hover": {
                    opacity: [0.9, 0.8, 0.7],
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  onClick={goHome}
                  component="img"
                  sx={{
                    width: 180,
                    height: 180,
                    maxHeight: { xs: 180, md: 180 },
                    maxWidth: { xs: 180, md: 180 },
                    boxSizing: "border-box",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                      cursor: "pointer",
                      border: "5px solid white",
                    },
                  }}
                  alt="Netflix profile icon"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnuhUq4HXrAE3wwDJRAJ97klKQ99jquh-ANNPEl_i7PmdrmC4lHAyuD6AvZ5ks_Ubnrbg&usqp=CAU"
                />
                <h1
                  style={{
                    color: "white",
                    textAlign: "center",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                      cursor: "pointer",
                      border: "5px solid white",
                    },
                  }}
                >
                  user4
                </h1>
              </Box>
              <Box
                sx={{
                  boxSizing: "border-box",
                  "&:hover": {
                    opacity: [0.9, 0.8, 0.7],
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: 180,
                    height: 180,
                    maxHeight: { xs: 180, md: 180 },
                    maxWidth: { xs: 180, md: 180 },
                    boxSizing: "border-box",
                    ":hover": {
                      backgroundColor: "white",
                      opacity: [0.9, 0.8, 0.7],
                      cursor: "pointer",
                      border: "5px solid white",
                    },
                  }}
                  alt="Netflix profile icon"
                  src={plusbtn}
                />
                <h1
                  style={{
                    color: "white",
                    textAlign: "center",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      opacity: [0.9, 0.8, 0.7],
                      cursor: "pointer",
                      border: "5px solid white",
                    },
                  }}
                >
                  프로필 추가
                </h1>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div
        style={{
          marginTop: "120px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="span"
          sx={{
            p: 2,
            border: "5px solid grey",
            "&:hover": {
              opacity: [0.9, 0.8, 0.7],
              cursor: "pointer",
              border: "5px solid white",
            },
          }}
        >
          <Button
            style={{
              fontSize: "1.5em",
              color: "#FFFFFF",
              fontWeight: "400",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
                cursor: "pointer",
                color: "#FFFFFF ",
                fontWeight: "bold",
              },
            }}
          >
            프로필 관리
          </Button>
        </Box>
      </div>
    </div>
  );
};
export default Profiles;
