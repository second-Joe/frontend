import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SettingsDropdown from "./SettingDropdown";
import MenuButton from "./MenuButton";
import { useMediaQuery, useTheme } from "@mui/material";

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

  // 이거 혹시 드롭다운으로 만드실건가요 ? 시리즈 클릭하면 페이지 이동이 아닌?
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const typographySx = isSmallScreen
    ? {
        mr: 2,
        display: { xs: "none" },
        fontFamily: "helvetica",
        fontWeight: 1000,
        letterSpacing: ".1rem",
        color: "red",
        textDecoration: "none",
        fontSize: "1.7em",
      }
    : {
        mr: 2,
        display: "flex",
        fontFamily: "helvetica",
        fontWeight: 1000,
        letterSpacing: ".1rem",
        color: "red",
        textDecoration: "none",
        fontSize: "2em",
        flexGrow: 1,
      };

  return (
    <AppBar position="fixed" style={{ background: "#212121" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ArrowBackIosNewIcon
            sx={{
              display: "flex",
              marginRight: "10px",
            }}
            onClick={goBack}
          />

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <MenuButton />
          </Box>

          <Typography noWrap component="a" href="/login" sx={typographySx}>
            NETFLIX
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
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
          <Box>
            <SettingsDropdown />
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
