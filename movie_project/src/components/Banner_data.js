import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import YouTube from "react-youtube";
import { useMediaQuery, useTheme } from "@mui/material";

function Banner_data({
  id,
  medium_cover_image,
  title,
  summary,
  genres,
  background,
  large_cover_image,
  yt_trailer_code,
}) {
  const theme = useTheme();
  console.dir(theme.breakpoints);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const containerStyle = isSmallScreen
    ? {
        height: "470px",
        display: "flex",
        marginLeft: "8.5%",
        flexDirection: "column",
        justifyContent: "space-around",
      }
    : { height: "350px", display: "flex", marginLeft: "8.5%" };

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
  const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 560,
    height: 315,
    bgcolor: "rgba(0,0,0,0.8)",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
    display: "flex",
    zIndex: 9999,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const [playeropen, setPlayerOpen] = React.useState(false);
  const trailerOpen = (e) => {
    e.stopPropagation();
    setPlayerOpen(true);
  };

  const trailerClose = () => setPlayerOpen(false);

  return (
    <div>
      <Container
        fixed
        maxWidth={false}
        disableGutters
        md={{ height: "500%" }}
        style={containerStyle}
      >
        <Box
          style={{
            width: "25%",
            position: "center",
            backgroundPosition: "left",
          }}
        >
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
              width: "205px",
              justifyContent: "space-between",
            }}
          >
            <Grid>
              <Button
                variant="outlined"
                startIcon={<PlayCircleFilledWhiteOutlinedIcon />}
                style={{ color: "white", backgroundColor: "#787777" }}
                onClick={trailerOpen}
              >
                재생
              </Button>
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
        <Box
          style={{
            backgroundImage: `url(${medium_cover_image})`,
            width: "230px",
            height: "345px",
          }}
        />
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
      <Modal keepMounted open={playeropen} onClose={trailerClose}>
        <Box sx={style1}>
          <YouTube
            videoId={yt_trailer_code}
            opts={{
              width: "560",
              height: "315",
              playerVars: {
                autoplay: 1,
                rel: 0,
                modestbranding: 1,
              },
            }}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
          />
        </Box>
      </Modal>
    </div>
  );
}
export default Banner_data;
