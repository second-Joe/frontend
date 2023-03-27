import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const ProfileAdd = ({ open, handleClose }) => {
  const [name, setName] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        sx={{
          backgroundColor: "#141414",
          color: "#fff",
        }}
      >
        프로필 추가
      </DialogTitle>
      <DialogContent
        sx={{
          backgroundColor: "#141414",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#141414",
            padding: "50px",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src="https://pyy0715.github.io/assets/img/uploads/profile.png"
              alt="User profile"
              style={{
                width: "180px",
                height: "180px",
                marginRight: "20px",
              }}
            />
            <TextField
              label="이름"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                width: "100%",
                borderRadius: "10px",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.5)",
              }}
              InputLabelProps={{
                style: {
                  color: "#fff",
                },
              }}
              InputProps={{
                style: {
                  color: "#fff",
                },
              }}
            />
          </div>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          backgroundColor: "#141414",
        }}
      >
        <Button onClick={handleClose} sx={{
          color: "#c4c4c4",
          border: "1px solid #c4c4c4",
          backgroundColor: "#000",
          marginRight: "10px",
          "&:hover": {
            backgroundColor: "#c4c4c4",
            color: "#000",
          },
        }}>
          닫기
        </Button>
        <Button onClick={handleSubmit} sx={{
          color: "#c4c4c4",
          border: "1px solid #c4c4c4",
          backgroundColor: "#000",
          marginRight: "10px",
          "&:hover": {
            backgroundColor: "#c4c4c4",
            color: "#000",
          },
        }}>
          저장
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileAdd;
