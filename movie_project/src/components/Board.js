import { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import StickyHeader from "./StickyHeader";
import Container from "@mui/material/Container";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { styled } from "@mui/system";
import { useMediaQuery, useTheme } from "@mui/material";

const Title = styled(DialogTitle)({
  backgroundColor: "#000",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Content = styled(DialogContent)({
  backgroundColor: "#000",
  color: "#fff",
});

const Board = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMiddleScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "영화를 클릭했는데 영화가 안나와요",
      content:
        "페이지 좌측 상단에 새로 고침 버튼을 누르거나, f5키를 눌러주세요.",
    },
    {
      id: 2,
      title: "약간 렉이 걸리는거 같아요",
      content: "방문기록에서 캐시 삭제 후 이용 바랍니다.",
    },
    {
      id: 3,
      title: "게시글을 어떻게 입력하는지 모르겠어요",
      content: "고객센터의 문의하기 버튼을 눌러주시길 바랍니다.",
    },
    {
      id: 4,
      title: "이게 진짜 영화를 보는 사이트인가요?",
      content: "영화 목록을 보여주는 사이트 입니다.",
    },
    {
      id: 5,
      title: "새로운 질문을 하고싶어요",
      content: "고객센터의 문의하기 버튼을 눌러주시길 바랍니다.",
    },
  ]);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleClick = (post) => {
    setSelectedPost(post);
  };

  const handleClose = () => {
    setSelectedPost(null);
  };

  let paddingTop = "250px";
  if (isSmallScreen) {
    paddingTop = "180px";
  }

  return (
    <div>
      <StickyHeader kind="고객센터" />
      <Container sx={{ paddingTop: { paddingTop } }}>
        {posts.map((post) => (
          <Card
            key={post.id}
            sx={{
              mb: 3,
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#dddddd",
              },
            }}
            onClick={() => handleClick(post)}
          >
            <CardContent>
              <Typography variant="h5" component="h2">
                {post.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
        <Dialog
          open={selectedPost !== null}
          onClose={handleClose}
          maxWidth="sm"
          fullWidth={true}
        >
          <Title>
            <Typography variant="h6" component="h2">
              {selectedPost?.title}
            </Typography>
          </Title>
          <Content>
            <Typography variant="body2" component="p">
              {selectedPost?.content}
            </Typography>
          </Content>
        </Dialog>
      </Container>
    </div>
  );
};

export default Board;
