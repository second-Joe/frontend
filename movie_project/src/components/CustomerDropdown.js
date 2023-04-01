import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const location = useLocation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    window.sessionStorage.clear(); // 세션스토리지에 저장된 속성값 모두 삭제
    navigate("/", { replace: true }); // 로그인페이지로 이동
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
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            display: { sm: "block" },
            textAlign: "center",
            fontFamily: "helvetica",
            fontWeight: 9,
            color: "white",
          }}
        >
          User's id
        </Typography>

        <ArrowDropDownIcon style={{ fontSize: "3rem", color: "red" }} />
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
        <MenuItem component={Link} to="/mypage">
          마이페이지
        </MenuItem>
        {console.log(location.pathname)}
        {location.pathname === "/customercenter" ? null : (
          <MenuItem component={Link} to="/customercenter">
            고객센터
          </MenuItem>
        )}

        <MenuItem onClick={logout} component={Link} to="/">
          로그아웃
        </MenuItem>
      </Menu>
    </div>
  );
}
