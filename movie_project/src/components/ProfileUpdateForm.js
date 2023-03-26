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
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <TextField
        label="이름"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{
          marginBottom: "20px",
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

      <UpdateBtn
        onSubmit={handleSubmit}
        onCancel={onCancel}
        onDelete={onDelete}
      />
    </Box>
  );
};

export default ProfileUpdateForm;
