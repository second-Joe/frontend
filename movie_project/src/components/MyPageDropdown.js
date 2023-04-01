import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    window.sessionStorage.clear(); // 세션스토리지에 저장된 속성값 모두 삭제
    navigate("/"); // 로그인페이지로 이동
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountBoxIcon
          sx={{
            fontSize: 40,
            color: "blue",
          }}
        />
        <ArrowDropDownIcon style={{ fontSize: "2rem", color: "white" }} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ mt: 6 }}
      >
        <MenuItem component={Link} to="/profiles">
          프로필 관리
        </MenuItem>

        <MenuItem component={Link} to="/customercenter">
          고객 센터
        </MenuItem>
        <Divider />
        <MenuItem onClick={logout} component={Link} to="/">
          로그아웃
        </MenuItem>
      </Menu>
    </div>
  );
}
