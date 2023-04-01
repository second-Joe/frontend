import Modal from "@mui/material/Modal";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useLayoutEffect, useState } from "react";

function Movie({ id, medium_cover_image, title, summary, genres }) {
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

  const [isHover, setIsHover] = React.useState(false);
  const handleHover = () => setIsHover(true);
  const handleLeave = () => setIsHover(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
    setIsHover(false);
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
        setIsChecked(res.data?.length ? true : false);
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
      console.log("isChecked가 true일때");
      setIsChecked(false);
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
    } else {
      console.log("isChecked false일때 ");
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
      setIsChecked(true);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <img
        src={medium_cover_image}
        title={title}
        style={{
          width: "95%",
          height: "95%",
          objectFit: "cover",
          transition: "all 0.3s ease-out",
          transform: isHover ? "scale(1.1)" : "scale(1)",
          cursor: "pointer",
        }}
        onClick={handleOpen}
      />
      {isHover ? (
        <div
          onClick={handleOpen}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "95%",
            height: "95%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
            backgroundColor: "rgba(0,0,0,0.8)",
            cursor: "pointer",
          }}
        >
          <Typography
            variant="h6"
            component="span"
            sx={{
              color: "white",
              p: 2,
              animation: isHover ? "none" : "$fadeInOut 2s ease-out infinite",
            }}
          >
            {title}
          </Typography>
        </div>
      ) : null}
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
                    height: "230px",
                    fontSize: 18,
                    display: "block",
                    overflowY: "scroll",
                  }}
                >
                  {summary.length > 500
                    ? `${summary.slice(0, 500)}...`
                    : summary}
                </p>
                <Grid onClick={() => handlelike()}>
                  <Button
                    variant="outlined"
                    style={{ color: "white", backgroundColor: "#787777" }}
                    startIcon={ischecked ? <StarIcon /> : <StarBorderIcon />}
                  >
                    찜하기
                  </Button>
                </Grid>
              </div>
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default Movie;
