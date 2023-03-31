import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React, { useState, useLayoutEffect } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import YouTube from "react-youtube";
import axios from "axios";
import { useMediaQuery, useTheme } from "@mui/material";

function Banner_data({
  id,
  medium_cover_image,
  title,
  summary,
  yt_trailer_code,
}) {
  const theme = useTheme();
  console.dir(theme.breakpoints);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const containerStyle = isSmallScreen
    ? {
        height: "470px",
        display: "flex",
        marginLeft: "8.5%",
        flexDirection: "column",
        justifyContent: "space-around",
      }
    : { height: "350px", display: "flex", marginLeft: "8.5%" };
  const imgStyle = isMediumScreen
    ? {
        display: "none",
      }
    : {
        backgroundImage: `url(${medium_cover_image})`,
        width: "230px",
        height: "345px",
      };
  const playerStyle = isSmallScreen
    ? { marginTop: "10px", width: "30%", height: "70%" }
    : {
        marginLeft: "40px",
      };

  const btnStyle = isMediumScreen
    ? {
        width: "25%",
        position: "center",
        backgroundPosition: "left",
      }
    : {
        diplay: "none",
      };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 780,
    height: 400,
    bgcolor: "rgba(0,0,0,0.8)",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
    display: "flex",
    zIndex: 9999,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [ischecked, setIsChecked] = useState(false);
  useLayoutEffect(() => {
    console.log("1번");
    axios
      .post("/favmovie/chk", {
        movie_title: title,
      })
      .then((res) => {
        setIsChecked(res.data?.length ? false : true);
        console.log("Res ", res);
        console.log("Res.data ", res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const handlelike = () => {
    console.log("ischecked" + ischecked);
    if (ischecked) {
      console.log("db에 없을때");
      setIsChecked(false);
      axios
        .post("/favmovie/insert", {
          movie_title: title,
          movie_summary: summary,
          movie_image: medium_cover_image,
        })
        .then((res) => {
          console.log("2");
          alert("찜하기 성공!!!");
        })
        .catch((e) => {
          console.error(e);
          console.log("3" + title);
        });
    } else {
      console.log("db에 있을때");
      setIsChecked(true);
      axios
        .post("/favmovie/delete", {
          movie_title: title,
        })
        .then((res) => {
          alert("찜하기 취소!!!");
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  return (
    <div>
      <Container
        fixed
        maxWidth={false}
        disableGutters
        md={{ height: "500%" }}
        style={containerStyle}
      >
        <Box style={btnStyle}>
          <Grid
            item
            xs={6}
            sm={3}
            md={4}
            style={{
              marginTop: "0px",
              justifyContent: "left",
              color: "white",
              fontSize: "1.7em",
              fontWeight: "bold",
              width: "300px",
            }}
          >
            {title}
          </Grid>
          <Grid
            container
            style={{
              marginTop: "12px",
              flexDirection: "row",
              width: "215px",
              justifyContent: "space-between",
            }}
          >
            <Grid onClick={() => handlelike()}>
              {ischecked ? (
                <Button
                  variant="outlined"
                  style={{ color: "white", backgroundColor: "#787777" }}
                  startIcon={<StarBorderIcon />}
                >
                  찜하기
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  style={{ color: "white", backgroundColor: "#787777" }}
                  startIcon={<StarIcon />}
                >
                  찜하기
                </Button>
              )}
            </Grid>
            <Grid>
              <Button
                variant="outlined"
                startIcon={<InfoOutlinedIcon />}
                onClick={handleOpen}
                style={{ color: "white", backgroundColor: "#787777" }}
              >
                상세정보
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box style={imgStyle} />
        <Box style={playerStyle}>
          <YouTube
            videoId={yt_trailer_code}
            opts={{
              width: "580",
              height: "345",
              playerVars: {
                autoplay: 0,
                rel: 0,
                modestbranding: 1,
              },
            }}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
          />
        </Box>
      </Container>
      <Modal keepMounted open={open} onClose={handleClose}>
        <Box sx={style}>
          <div style={{ display: "flex" }}>
            <img
              width="300px"
              height="400px"
              style={{
                display: "flex",
              }}
              src={medium_cover_image}
              alt="movie"
            ></img>
            <Typography
              component="span"
              sx={{
                color: "white",
              }}
              style={{
                marginLeft: "16px",
                display: "flex",
                width: "450px",
              }}
            >
              <div
                style={{
                  display: "block",
                  flexDirection: "column",
                }}
              >
                <h2 style={{ display: "block" }}>{title}</h2>
                <p
                  style={{
                    fontSize: 18,
                    display: "block",
                    overflow: "hidden",
                  }}
                >
                  {summary.length > 500
                    ? `${summary.slice(0, 500)}...`
                    : summary}
                </p>
              </div>
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default Banner_data;
