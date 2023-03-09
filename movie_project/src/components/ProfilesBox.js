import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const ProfilesBox = ({ src, user }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/login");
  };
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        "&:hover": {
          opacity: [0.9, 0.8, 0.7],
          cursor: "pointer",
        },
      }}
    >
      <Box
        onClick={goHome}
        component="img"
        sx={{
          width: 180,
          height: 180,
          maxHeight: { xs: 180, md: 180 },
          maxWidth: { xs: 180, md: 180 },
          boxSizing: "border-box",
          "&:hover": {
            backgroundColor: "white",
            opacity: [0.9, 0.8, 0.7],
            cursor: "pointer",
            border: "5px solid white",
            color: "white",
          },
        }}
        alt="Netflix profile icon"
        src={src}
      />
      <h1
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        {user}
      </h1>
    </Box>
  );
};

export default ProfilesBox;
