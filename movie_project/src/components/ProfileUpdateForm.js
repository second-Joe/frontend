import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import UpdateBtn from "./UpdateBtn";

const ProfileUpdateForm = ({ onSubmit, onCancel, onDelete }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#141414",
        padding: "50px",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.5)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <img
          src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/50e8272e1fac95db8aa33e34_rw_600.png?h=5c620938ca992743e815e0c3629f52d9"
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

      <UpdateBtn
        onSubmit={handleSubmit}
        onCancel={onCancel}
        onDelete={onDelete}
      />
    </Box>
  );
};

export default ProfileUpdateForm;
