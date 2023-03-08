import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

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
    //jwt 삭제
    //localStorage.removeItem('jwtToken');
    navigate("/", { replace: true });
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
            display: { xs: "none", sm: "block" },
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
          계정
        </MenuItem>
        <MenuItem onClick={logout} component={Link} to="/">
          로그아웃
        </MenuItem>
      </Menu>
    </div>
  );
}
