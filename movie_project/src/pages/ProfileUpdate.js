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
          maxWidth: "700px",
          margin: "0 auto",
          padding: "30px 20px",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "4rem" }}>프로필 변경</h1>
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
