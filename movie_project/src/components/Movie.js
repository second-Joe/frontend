import "./Movie.css"
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./Movie.css"
function Movie({ id, medium_cover_image, title, summary, genres }) {
    //모달창 스타일
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 780,
        height: 400,
        bgcolor: 'rgba(0,0,0,0.8)',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,
        display: "flex",
        zIndex: 9999,
    };
    // 마우스 호버 확인
    const [isHover, setIsHover] = React.useState(false);
    const handleHover = () => setIsHover(true);
    const handleLeave = () => setIsHover(false);

    //모달창 열림/닫힘
    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
        e.stopPropagation();
        setOpen(true);
        setIsHover(false);
        //클릭하자마자 마우스 호버가 되서 적용 불가. 클릭시에도 큰모달과 작은모달이 동시 존재
    }
    //모달창 닫히게 하기 위함
    const handleClose = () => setOpen(false);



    return (
        <div
            //반응형으로 하기 위함
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
            }}
            //마우스 호버를 재정의
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            <img
                src={medium_cover_image}
                title={title}
                style={{
                    //반응형으로 하기 위함
                    width: "100%",
                    height: "100%",
                    //object-fit: 이미지와 같은 요소를 지정된 너비와 높이로 지정하기 위함
                    //cover: 종횡비를 유지하면서 정의된 너비와 높이를 가득 채울때까지 확대
                    objectFit: "cover",
                    //transition : 전환을 구현
                    //all : 여기서 움직이는 모든 속성을
                    //0.3s ease out : 시작은 0.3초만에, 끝날떄는 좀 더 느리게 
                    transition: "all 0.3s ease-out",
                    //호버가 되면 이미지 크기를 1.1배로 늘림
                    transform: isHover ? "scale(1.1)" : "scale(1)",
                    //커서가 모양을 바꿈
                    cursor: "pointer",
                }}
                //클릭시 모달창이 오픈됨
                onClick={handleOpen}
            />
            {/* 마우스 호버시 제목과, 검은 미니모달 */}
            {isHover ? (
                //온클릭을 설정한 이유는 미니모달을 클릭시
                //큰 모달창이 열리지 않아서 따로 모달창을 열리게 설정
                <div onClick={handleOpen}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        //반응형으로 설정하기위해 높이와 너비를 %로 설정
                        width: "100%",
                        height: "100%",
                        //다양한 작업을 가능하게 하기 위해 flex를 사용
                        //예)컨테이너 안에 있는 아이템 요소들을 수평 방향으로 배치하거나, 
                        //간격을 조정하거나, 요소의 크기를 동적으로 변경하거나, 
                        //아이템의 순서를 변경
                        display: "flex",
                        //justifyContent: "center"는 글의 좌우간격을 가운데로 설정
                        justifyContent: "center",
                        //alignItems: "center"는 글의 높이를 가운데로 설정
                        alignItems: "center",
                        zIndex: 10,
                        // animation: isHover ? "none" : "$fadeInOut 2s ease-out",
                        backgroundColor: "rgba(0,0,0,0.8)",
                        cursor: "pointer",
                    }}
                >
                    <Typography
                        variant="h6" //variant: 글의 크기 설정
                        component="span" //콘솔Warning: validateDOMNesting제거하기 위해 설정함
                        //Typograpy는 <p>형식인데 이를 변경하기 위함.
                        //여기서는 큰 이유는 없음. 밑의 Typography가 중요함
                        sx={{
                            color: "white",
                            p: 2,
                            animation: isHover ? "none" : "$fadeInOut 2s ease-out infinite",
                        }}
                    >
                        {title}
                    </Typography>
                </div>
                //호버 시 행동 끝. 호버중이 아니라면 NULL
            ) : null}
            {/* 모달창 시작 */}
            <Modal
                //keepMounted가 없을 시. 이미지 클릭시 작은모달이 계속 떠 있는 상태가
                //있는 경우가 있음. 그걸 방지하기 위함
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div style={{ display: "flex" }}>
                        <img
                            width="300px"
                            height="400px"
                            style={{
                                display: "flex"
                            }}
                            src={medium_cover_image}
                        ></img>
                        <Typography
                            component="span"
                            //콘솔Warning: validateDOMNesting제거하기 위해 설정함
                            //Typography는 <p>와 같은 요소인데, 안에 <div>가 있을 시
                            //Warning: validateDOMNesting이 출력된다.
                            sx={{
                                color: "white",
                            }}

                            style={{
                                //marginLeft를 주지 않는다면, 글이 이미지 밑으로 가게 됨
                                marginLeft: "16px",
                                display: "flex",
                                width: "450px",
                            }}
                        >
                            <div
                                style={{
                                    display: "block",
                                    //flexDirection: "column":h2 요소와 p 요소가 수직 방향으로 배치되게 하는
                                    //요소로, Typography 컴포넌트 내부에서 
                                    //display: flex 속성을 사용하여 flex-direction: column 스타일을 적용
                                    flexDirection: "column",

                                    // 현재 whitespace를 불가능하게 만든 이유는. 한줄로 만 출력되기 때문
                                    // whiteSpace: "nowrap",
                                }}
                            >
                                <h2 style={{ display: "block" }}>{title}</h2>
                                <p
                                    style={{
                                        //현재는 textoverflow 밑 기타 요소들을, 밑의 삼항연산자가 대체
                                        fontSize: 18,
                                        display: "block",
                                        overflow: "hidden"
                                        //textOverflow: 글자가 maxHeight를 넘을 시, 보이지 않게 하기 위함
                                        //overflow hidden으로는 일정 높이를 초과하게 되면 나머지 부분을 숨김
                                        // textOverflow: "ellipsis",
                                        // maxHeight: "320px",
                                    }}
                                >
                                    {/* 글자가 600자가 넘을시, 600글자에서 짜르고 ...을 나오게 함 */}
                                    {summary.length > 500
                                        ? `${summary.slice(0, 500)}...`
                                        : summary}
                                </p>
                            </div>
                        </Typography>
                    </div>
                </Box>
            </Modal >
        </div >
    )
}
export default Movie;