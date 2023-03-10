import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React, { useState, useRef } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import YouTube from "react-youtube";

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
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    height: 600,
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
    width: 1100,
    height: 440,
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

  const [playeropen, setPlayerOpen] = useState(false);

  const trailerOpen = (e) => {
    e.stopPropagation();
    setPlayerOpen(true);
    if (youtubeRef.current) {
      youtubeRef.current.playVideo();
    }
  };

  const trailerClose = () => {
    setPlayerOpen(false);
    if (youtubeRef.current) {
      youtubeRef.current.stopVideo();
    }
  };

  const youtubeRef = useRef(null);
  return (
    <div>
      <Container
        maxWidth={false}
        disableGutters
        md={{ height: "100%" }}
        style={{
          backgroundImage: `url(${medium_cover_image})`,
          height: "70vh",
          backgroundPosition: "center",
          backgroundSize: "container",
          padding: "0 15%",
        }}
      >
        <Box
          style={{
            width: "500px",
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-160%, -50%)",
          }}
        >
          <Grid
            item
            xs={6}
            md={4}
            style={{
              fontSize: "2em",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {title}
          </Grid>
          <Grid
            container
            rowspacing={3}
            columnSpacing={3}
            style={{
              marginTop: "5px",
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
              width: style1.width.toString(),
              height: style1.height.toString(),
              playerVars: {
                autoplay: 1,
                rel: 0,
                modestbranding: 1,
              },
            }}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
            onReady={(e) => {
              youtubeRef.current = e.target;
            }}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default Banner_data;
