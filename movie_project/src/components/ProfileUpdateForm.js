import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Checkbox, FormControlLabel } from "@mui/material";
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
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <img
          src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/50e8272e1fac95db8aa33e34_rw_600.png?h=5c620938ca992743e815e0c3629f52d9"
          alt="User profile"
          style={{
            width: "180px",
            height: "180px",
            marginRight: "20px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
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
              marginBottom: "20px",
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <label
              style={{ marginLeft: "15px", marginRight: "10px", color: "#fff" }}
            >
              언어 선택:
            </label>
            <select
              sx={{
                borderRadius: "10px",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                backgroundColor: "#000",
                padding: "5px",
              }}
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="ch">중국어</option>
            </select>
          </div>
        </div>
      </div>
      <hr
        style={{
          borderColor: "rgba(255, 255, 255, 0.5)",
          borderWidth: "1px",
          marginTop: "20px",
        }}
      />
      <p style={{ color: "#fff", marginTop: "20px" }}>게임 닉네임:</p>
      <p style={{ color: "#fff", marginBottom: "10px" }}>
        닉네임은 모든 넷플릭스 게임에서 다른 넷플릭스 회원들과 같이 플레이할 때
        사용되는 고유의 이름입니다.
      </p>
      <TextField
        label="게임 닉네임 등록"
        variant="outlined"
        sx={{
          width: "100%",
          borderRadius: "10px",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          marginTop: "5px",
          marginBottom: "20px",
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
      <hr
        style={{
          borderColor: "rgba(255, 255, 255, 0.5)",
          borderWidth: "1px",
          marginTop: "10px",
        }}
      />
      <p style={{ color: "#fff", marginTop: "20px" }}>관리 수준 설정:</p>
      <p style={{ color: "#fff", marginBottom: "10px" }}>
        <span style={{ color: "gray" }}>모든 관람등급</span>
      </p>
      <p style={{ color: "#fff", marginBottom: "20px" }}>
        이 프로필에서는 모든 성숙도 수준의 콘텐츠가 표시됩니다.
      </p>
      <Button
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
        수정
      </Button>
      <hr
        style={{
          borderColor: "rgba(255, 255, 255, 0.5)",
          borderWidth: "1px",
          marginTop: "20px",
        }}
      />
      <h3 style={{ color: "#fff", marginTop: "20px" }}>자동 재생 설정</h3>
      <FormControlLabel
        control={
          <Checkbox
            style={{
              color: "#c4c4c4",
            }}
          />
        }
        label="모든 디바이스에서 시리즈의 다음 화 자동 재생"
        labelPlacement="end"
        sx={{
          color: "#fff",
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            style={{
              color: "#c4c4c4",
            }}
          />
        }
        label="모든 디바이스에서 탐색 중 미리보기 자동 재생"
        labelPlacement="end"
        sx={{
          color: "#fff",
        }}
      />
      <hr
        style={{
          borderColor: "rgba(255, 255, 255, 0.5)",
          borderWidth: "1px",
          marginTop: "20px",
          marginBottom: "20px",
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
