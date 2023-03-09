import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ProfilesManageBtn = () => {
  return (
    <div>
      <Box
        component="span"
        sx={{
          p: 2,
          border: "5px solid grey",
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
            cursor: "pointer",
            border: "5px solid white",
          },
        }}
      >
        <Button
          style={{
            fontSize: "1.5em",
            color: "#FFFFFF",
            fontWeight: "400",
            "&:hover": {
              opacity: [0.9, 0.8, 0.7],
              cursor: "pointer",
              color: "#FFFFFF ",
              fontWeight: "bold",
            },
          }}
        >
          프로필 관리
        </Button>
      </Box>
    </div>
  );
};

export default ProfilesManageBtn;
