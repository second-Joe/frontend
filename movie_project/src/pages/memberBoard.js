import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import StickyHeader from "../components/StickyHeader";
import Container from "@mui/material/Container";
import CustomizedButton from "../components/CustomizedButton";
import { Navigate, useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";

const columns = [
  { id: "num", label: "번호", width: 5 },
  { id: "email", label: "이메일", width: 70 },
  { id: "password", label: "패스워드", width: 10 },
  { id: "name", label: "이름", width: 20 },
  { id: "phone", label: "휴대폰번호", width: 20 },
  { id: "addr", label: "주소", width: 30 },
  { id: "pwQ", label: "비밀번호 찾기 질문", width: 30 },
  { id: "pwA", label: "비밀번호 찾기 답", width: 30 },
  { id: "date", label: "가입 날짜", width: 30 },
  { id: "updateDelete", label: "수정/삭제", width: 10 },
];

export const posts = [
  {
    num: "1",
    email: "diana@naver.om",
    password: "****",
    name: "김다희",
    phone: "010-234-2343",
    addr: "부평구",
    pwQ: "가장 아끼는 보물 1호는?",
    pwA: "나 자신",
    date: "2023-01-01",
  },
  {
    id: "2",
    author: "홍길동",
    title: "영화는 어떻게 보는건가요",
    content: "This is my first post",
    date: "2023-01-01",
  },
  {
    id: "2",
    author: "홍길동",
    title: "영화는 어떻게 보는건가요",
    content: "This is my first post",
    date: "2023-01-01",
  },
  {
    id: "2",
    author: "홍길동",
    title: "영화는 어떻게 보는건가요",
    content: "This is my first post",
    date: "2023-01-01",
  },
  {
    id: "2",
    author: "홍길동",
    title: "영화는 어떻게 보는건가요",
    content: "This is my first post",
    date: "2023-01-01",
  },
  {
    id: "2",
    author: "홍길동",
    title: "영화는 어떻게 보는건가요",
    content: "This is my first post",
    date: "2023-01-01",
  },
  {
    id: "2",
    author: "홍길동",
    title: "영화는 어떻게 보는건가요",
    content: "This is my first post",
    date: "2023-01-01",
  },
  {
    id: "2",
    author: "홍길동",
    title: "영화는 어떻게 보는건가요",
    content: "This is my first post",
    date: "2023-01-01",
  },
  {
    id: "2",
    author: "홍길동",
    title: "영화는 어떻게 보는건가요",
    content: "This is my first post",
    date: "2023-01-01",
  },
  {
    id: "2",
    author: "홍길동",
    title: "영화는 어떻게 보는건가요",
    content: "This is my first post",
    date: "2023-01-01",
  },
  {
    id: "2",
    author: "홍길동",
    title: "영화는 어떻게 보는건가요",
    content: "This is my first post",
    date: "2023-01-01",
  },
  {
    id: "2",
    author: "홍길동",
    title: "영화는 어떻게 보는건가요",
    content: "This is my first post",
    date: "2023-01-01",
  },
  {
    id: "2",
    author: "홍길동",
    title: "영화는 어떻게 보는건가요",
    content: "This is my first post",
    date: "2023-01-01",
  },
  {
    id: "2",
    author: "홍길동",
    title: "영화는 어떻게 보는건가요",
    content: "This is my first post",
    date: "2023-01-01",
  },
];

export default function MemberBoard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMiddleScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedPost, setSelectedPost] = React.useState(null); // 추가

  let paddingTop = "200px";
  if (isSmallScreen) {
    paddingTop = "140px";
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/boardInsert");
  };
  const handleTableCellClick = (event, post) => {
    setSelectedPost(post);
    navigate(`/board/${post.id}`, { state: { post } });
  };

  return (
    <div>
      <StickyHeader kind="고객관리" />
      <Container sx={{ paddingTop: { paddingTop } }}>
        <h2 style={{ display: "flex", alignItems: "center", color: "black" }}>
          <span style={{ marginRight: "auto" }}>고객관리</span>
        </h2>
        <CustomizedButton
          onClick={handleClick}
          label="글 작성"
        ></CustomizedButton>

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ width: 800, maxHeight: 640 }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              style={{ width: "800px" }}
              tableLayout="fixed"
            >
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      width="300px"
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {posts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((post, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={index}
                        sx={{
                          "&:hover": {
                            cursor: "pointer",
                            backgroundColor: "#dddddd",
                          },
                        }}
                        onClick={(event) => handleTableCellClick(event, post)}
                      >
                        {columns.map((column) => {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {post[column.id]}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={posts.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </div>
  );
}
