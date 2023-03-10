import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

function Banner() {
  const [mystery, setMystery] = useState([]);
  const loadMysteryMovies = async (page) => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?limit=1&genre=mystery`
    );
    const data = await response.json();
    setMystery(data.data.movies);
  };
  console.log(mystery.id);

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };
  useEffect(() => {
    loadMysteryMovies();
  }, []);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Container
        maxWidth={false}
        disableGutters
        md={{ height: "100%" }}
        style={{
          backgroundImage: `url(${mystery.background})`,
          height: "70vh",
          backgroundSize: "cover",
        }}
      >
        <Box
          style={{
            width: "500px",
            postion: "absolute",
            top: 100,
            left: 50,
          }}
        >
          <Grid
            item
            xs={6}
            md={4}
            style={{
              fontSize: "2em",
              fontWeight: "bold",
            }}
          >
            {mystery.title}
          </Grid>
          <Grid contianer spacing={2}>
            <Grid>
              <Button
                variant="outlined"
                startIcon={<PlayCircleFilledWhiteOutlinedIcon />}
                style={{ color: "white", backgroundColor: "#787777" }}
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
              src={mystery.medium_cover_image}
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
                <h2 style={{ display: "block" }}>{mystery.title}</h2>
                <p
                  style={{
                    fontSize: 18,
                    display: "block",
                    overflow: "hidden",
                  }}
                >
                  {mystery.summary.length > 500
                    ? `${mystery.summary.slice(0, 500)}...`
                    : mystery.summary}
                </p>
              </div>
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default Banner;
