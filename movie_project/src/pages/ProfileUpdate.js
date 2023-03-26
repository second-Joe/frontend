import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import ProfileUpdateForm from "../components/ProfileUpdateForm";

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/profiles");
  };

  const handleCancel = () => {
    navigate("/profiles");
  };

  const handleDelete = () => {
    navigate("/profiles");
  };

  return (
    <Box sx={{ backgroundColor: "#141414", minHeight: "100vh" }}>
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 20px",
          color: "#fff",
        }}
      >
        <h2>프로필 변경</h2>
        <ProfileUpdateForm
          onSubmit={handleSave}
          onCancel={handleCancel}
          onDelete={handleDelete}
        />
      </Box>
    </Box>
  );
};

export default ProfileUpdate;
