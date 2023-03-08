import { Button, Container, TextField, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#000",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  loginContainer: {
    padding: "5rem 2rem",
    background: "#fff",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem",
    },
  },
  logo: {
    marginBottom: "2rem",
  },
  input: {
    marginBottom: "1rem",
  },
  signInButton: {
    textTransform: "none",
    background: "#e50914",
    color: "#fff",
    fontWeight: "bold",
    "&:hover": {
      background: "#e50914",
      opacity: "0.8",
    },
  },
}));

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});

function Login() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" className={classes.container}>
        <div className={classes.loginContainer}>
          <img src="imgs/net.png" alt="Netflix Logo" className={classes.logo} />
          <Typography variant="h5" gutterBottom>
            로그인
          </Typography>
          <TextField
            label="이메일"
            variant="outlined"
            className={classes.input}
            fullWidth
          />
          <TextField
            label="비밀번호"
            type="password"
            variant="outlined"
            className={classes.input}
            fullWidth
          />
          <Button
            variant="contained"
            className={classes.signInButton}
            fullWidth
          >
            로그인
          </Button>
          <Typography variant="body2" style={{ marginTop: "1rem" }}>
            처음이신가요? <a href="/">회원 가입</a>
          </Typography>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
//LOgin 수정 진행중......
