import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import StickyHeader from './StickyHeader';
import Container from "@mui/material/Container";
import CustomizedButton from "./CustomizedButton";
import { Navigate, useNavigate } from 'react-router-dom';
const columns = [
    { id: 'id', label: '번호', minWidth: 10 },
    { id: 'author', label: '작성자', minWidth: 10 },
    { id: 'title', label: '제목', minWidth: 350 },
    { id: 'date', label: '날짜', minWidth: 40 },
];

export const posts = [
    { id: '1', author: '홍길동', title: '영화는 어떻게 보는건가요', content: 'This is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my firstrst postThis is my first postThis is myrst postThis is my first postThis is myrst postThis is my first postThis is myrst postThis is my first postThis is myrst postThis is my first postThis is myrst postThis is my first postThis is my postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis is my first postThis', date: '2023-01-01' },
    { id: '2', author: '홍길동', title: '영화는 어떻게 보는건가요', content: 'This is my first post', date: '2023-01-01' }

];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [selectedPost, setSelectedPost] = React.useState(null); // 추가


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/boardInsert');
    }
    const handleTableCellClick = (event, post) => {
        setSelectedPost(post);
        navigate(`/board/${post.id}`, { state: { post } });
    };

    return (
        <div>
            <StickyHeader />
            <Container sx={{ paddingTop: "200px" }}>
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
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
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