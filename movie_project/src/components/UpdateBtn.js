import React from "react";
import Button from "@mui/material/Button";

const UpdateBtn = ({ onSubmit, onCancel, onDelete }) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      {onDelete && (
        <Button
          onClick={onDelete}
          variant="outlined"
          sx={{
            color: "#c4c4c4",
            border: "1px solid #c4c4c4",
            backgroundColor: "#000",
            marginRight: "10px",
            "&:hover": {
              backgroundColor: "#c4c4c4",
              color: "#000",
            },
          }}
        >
          프로필 삭제
        </Button>
      )}

      <Button
        onClick={onCancel}
        variant="outlined"
        sx={{
          color: "#c4c4c4",
          border: "1px solid #c4c4c4",
          backgroundColor: "#000",
          marginRight: "10px",
          "&:hover": {
            backgroundColor: "#c4c4c4",
            color: "#000",
          },
        }}
      >
        취소
      </Button>

      <Button
        onClick={onSubmit}
        variant="contained"
        sx={{
            color: "#c4c4c4",
            border: "1px solid #c4c4c4",
            backgroundColor: "#000",
            marginRight: "10px",
            "&:hover": {
              backgroundColor: "#c4c4c4",
              color: "#000",
            },
          }}
      >
        저장
      </Button>
    </div>
  );
};

export default UpdateBtn;
