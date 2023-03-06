import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { createTheme } from "@mui/material/styles";

const pages = ["시리즈", "영화", "NEW! 요즘 대세 콘텐츠", "내가 찜한 콘텐츠"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: 20,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavBar = ({ search, setSearch }) => {
  //Link 컴포넌트를 사용하지 않고 다른 페이지로 이동해야 할때 사용
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goLogout = () => {
    //Login 경로로 이동(로그아웃 하면 다시 뒤로가기 안됨)
    //replace: true는 페이지를 이동할때 현재 페이지를 기록에 남기지 않는다.
    navigate("/", { replace: true });
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const goSearch = (e) => {
    setSearch(e.target.value);
  };

  const [state, setState] = React.useState(false);

  const toggleDrawer = (event) => {
    setState(!state);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ArrowBackIosNewIcon
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              marginRight: "10px",
            }}
            onClick={goBack}
          />
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/login"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "helvetica",
              fontWeight: 1000,
              letterSpacing: ".1rem",
              color: "red",
              textDecoration: "none",
              fontSize: "1.7em",
            }}
          >
            NETFLIX
          </Typography>
          <ArrowBackIosNewIcon
            sx={{ display: { md: "none" } }}
            onClick={goBack}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              onClick={toggleDrawer}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            <Drawer open={state} onClose={toggleDrawer}>
              <Box
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
              >
                <List>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to="/login">
                      <ListItemText primary="홈" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to="/login">
                      <ListItemText primary="시리즈" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to="/login">
                      <ListItemText primary="영화" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to="/login">
                      <ListItemText primary="NEW! 요즘 대세 컨텐츠" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to="/login">
                      <ListItemText primary="내가 찜한 콘텐츠" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to="/login">
                      <ListItemText primary="언어별로 찾아보기" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/login"
            sx={{
              fontFamily: "helvetica",
              fontWeight: 1000,
              letterSpacing: ".1rem",
              color: "red",
              textDecoration: "none",
              fontSize: "1.7em",
              mr: 2,
              display: { sm: "flex", md: "none", xs: "none" },
              flexGrow: 1,
            }}
          >
            NETFLIX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Search onClick={goSearch}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={goSearch}
            />
          </Search>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <SettingsIcon fontSize="large" color="background" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                key={"설정"}
                onClick={handleCloseUserMenu}
                component={Link}
                to="/settings"
              >
                <Typography textAlign="center">{"설정"}</Typography>
              </MenuItem>
              <MenuItem
                key={"프로필 변경"}
                onClick={handleCloseUserMenu}
                component={Link}
                to="/profiles"
              >
                <Typography textAlign="center">{"프로필 변경"}</Typography>
              </MenuItem>
              <MenuItem
                key={"로그아웃"}
                onClick={handleCloseUserMenu}
                onClick={goLogout}
                component={Link}
                to="/"
              >
                <Typography textAlign="center">{"로그아웃"}</Typography>
              </MenuItem>
              <MenuItem
                key={"마이페이지"}
                onClick={handleCloseUserMenu}
                component={Link}
                to="/MyPage"
              >
                <Typography textAlign="center">{"마이페이지"}</Typography>
              </MenuItem>
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
{
  /* searchBar input의 onChange함수에 처음 값이 바뀌었을 때 부모컴포넌트의 state값 변경, 아래에 입력한 값의 변화에 따라 searchResult 띄우기
    logout버튼 누르면 Link는 / 로 이동(처음 로그인 페이지) 아니면 Navigate로 맨 처음으로 이동
    searcbar버튼을 눌렀을 때나 엔터를 쳤을 때 searchResult Link걸어서 searchResult로 이동
    
  */
}
