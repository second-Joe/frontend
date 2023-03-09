import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import plusbtn from "../assets/plusbtn.png";
import ProfilesBox from "../components/ProfilesBox";
import ProfilesManageBtn from "../components/ProfilesManageBtn";
// import Typography from "material-ui/Typography";
// import { withStyles } from "material-ui/styles";

const Profiles = () => {
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
              <ProfilesBox
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                user="user1"
              />
              <ProfilesBox
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
                user="user2"
              />
              <ProfilesBox
                src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/50e8272e1fac95db8aa33e34_rw_600.png?h=5c620938ca992743e815e0c3629f52d9"
                user="user3"
              />
              <ProfilesBox
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnuhUq4HXrAE3wwDJRAJ97klKQ99jquh-ANNPEl_i7PmdrmC4lHAyuD6AvZ5ks_Ubnrbg&usqp=CAU"
                user="user4"
              />
              <ProfilesBox src={plusbtn} user="프로필 추가" />
            </Grid>
          </Grid>
          <div
            style={{
              marginTop: "80px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ProfilesManageBtn />
          </div>
        </Box>
      </div>
    </div>
  );
};
export default Profiles;
