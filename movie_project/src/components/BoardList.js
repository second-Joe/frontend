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
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const columns = [
    { id: 'id', label: '번호', minWidth: 10 },
    { id: 'author', label: '작성자', minWidth: 10 },
    { id: 'title', label: '제목', minWidth: 350 },
    { id: 'date', label: '날짜', minWidth: 40 },
];

const posts = [
    { id: '1', author: '홍길동', title: '영화는 어떻게 보는건가요', content: 'This is my first post', date: '2023-01-01' },
    { id: '1', author: '홍길동', title: '영화는 어떻게 보는건가요', content: 'This is my first post', date: '2023-01-01' }

];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [open, setOpen] = React.useState(false);
    const [selectedPost, setSelectedPost] = React.useState({});


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/boardinsert');
    };
    const insertClick = () => {
        navigate('/boardinsert');
    };
    const deleteClick = () => {
        navigate('/boardinsert');
    };

    const handleTableCellClick = (event, post) => {
        setSelectedPost(post);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <div>
            <StickyHeader />
            <Container sx={{ paddingTop: "200px" }}>
                <h2 style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ marginRight: "auto" }}>문의하기</span>
                    <CustomizedButton
                        onClick={handleClick}
                        label="글 작성"
                    ></CustomizedButton></h2>


                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
                                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                {columns.map((column) => {
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                            onClick={(event) => handleTableCellClick(event, post)}
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
                        count={posts.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper >
                <Dialog
                    open={open}
                    onClose={handleCloseModal}
                    fullWidth={true}
                    maxWidth={'sm'}
                >
                    <DialogTitle style={{ backgroundColor: 'red', color: 'white' }}>
                        제목 : {selectedPost.title}
                    </DialogTitle>
                    <DialogContent style={{ margin: '1rem' }}>
                        <Typography variant='body1' color='textSecondary'>
                            <span style={{ fontWeight: 'bold' }}>작성자 : </span>
                            {selectedPost.author}
                        </Typography>
                        <Typography variant='body1' color='textSecondary' style={{ marginTop: '1rem' }}>
                            <span style={{ fontWeight: 'bold' }}>내용 : </span>
                            {selectedPost.content}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <CustomizedButton
                            onClick={insertClick}
                            label="수정"
                        ></CustomizedButton>
                        <CustomizedButton
                            onClick={deleteClick}
                            label="삭제"
                        ></CustomizedButton>
                    </DialogActions>
                </Dialog>
            </Container>
        </div>
    );
}