import { Container, Paper, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import StickyHeader from './StickyHeader';
import { posts } from './BoardList';
import CustomizedButton from './CustomizedButton';

export default function BoardDetail() {
    const { id } = useParams();
    const post = posts.find((post) => post.id === id);

    return (
        <div>
            <StickyHeader />
            <Container sx={{ paddingTop: '200px' }}>
                <Paper sx={{ padding: '16px' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: '16px' }}>
                        {post && post.id === id ? post.title : '게시글을 찾을 수 없습니다.'}
                    </Typography>
                    {post && post.id === id ? (
                        <div>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    height: 500
                                }}
                            >
                                <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', mb: '8px', fontWeight: 'bold', flexShrink: 0 }}>
                                    작성자 : <Box sx={{ ml: '8px' }}>{post.author}</Box>
                                </Typography>
                                <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', mb: '8px', fontWeight: 'bold', flexShrink: 0 }}>
                                    내용&nbsp;&nbsp; &nbsp;:
                                    <Box sx={{ ml: '8px', flex: 1, overflowWrap: 'break-word' }}>{post.content}</Box>
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <CustomizedButton label="수정" value="updateDelete"></CustomizedButton>
                                &nbsp; &nbsp;
                                <CustomizedButton label="삭제" value="updateDelete"></CustomizedButton>
                            </Box>
                        </div>
                    ) : null}
                </Paper>
            </Container>
        </div>
    );
}