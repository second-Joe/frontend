import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const ProfilesBox = ({ src, user, editMode }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/login");
  };

  return (
    <Box
      sx={{
        position: "relative",
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
      {editMode && user !== "프로필 추가" && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "1.5em",
              fontWeight: "bold",
            }}
          >
            수정
          </div>
        </div>
      )}
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
