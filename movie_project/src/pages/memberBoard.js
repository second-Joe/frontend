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
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function StickyHeadTable() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMiddleScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const columns = [
    { id: "board_num", label: "번호", minWidth: 10 },
    { id: "member_id", label: "아이디", minWidth: 10 },
    { id: "board_title", label: "패스워드", minWidth: 10 },
    { id: "board_date", label: "이름", minWidth: 20 },
  ];

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

  //배열 시작
  const [boardlist, setBoardList] = useState([]);

  const [article, setArticle] = useState({
    board_num: 0,
    member_id: "",
    board_title: "",
    board_date: "",
  });

  const getList = () => {
    axios
      .post("http://localhost:8080/customer/get", {})
      .then((res) => {
        const { data } = res;
        setBoardList(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleTableCellClick = (event, post) => {
    navigate(`/board/${post.board_num}`);
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <StickyHeader kind="고객관리" />
      <Container sx={{ paddingTop: { paddingTop } }}>
        <h2 style={{ display: "flex", alignItems: "center", color: "white" }}>
          <span style={{ marginRight: "auto" }}>문의하기</span>
          <CustomizedButton
            onClick={handleClick}
            label="글 작성"
          ></CustomizedButton>
        </h2>

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 640 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.board_num}
                      align={column.board_title}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {boardlist
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
                            <TableCell
                              key={column.board_num}
                              align={column.board_title}
                            >
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
            count={boardlist.length}
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
