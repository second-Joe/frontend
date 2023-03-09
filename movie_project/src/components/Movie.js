import "./Movie.css"
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./Movie.css"
function Movie({ id, medium_cover_image, title, summary, genres }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 720,
        maxheight: 320,
        bgcolor: 'rgba(0,0,0,0.8)',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,
        display: "flex",
        zIndex: 9999,
    };

    const [isHover, setIsHover] = React.useState(false);


    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
        e.stopPropagation();
        setOpen(true);
        setIsHover(false); //적용이 안됩니다
    }


    const handleHover = () => setIsHover(true);
    const handleLeave = () => setIsHover(false);
    const handleClose = () => setOpen(false);
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",

            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            <img
                src={medium_cover_image}
                title={title}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "all 0.3s ease-out",
                    transform: isHover ? "scale(1.1)" : "scale(1)",
                    cursor: "pointer",
                }}
                onClick={handleOpen}
            />
            {isHover ? (
                <div onClick={handleOpen}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 10,
                        backgroundColor: "rgba(0,0,0,0.8)",
                        cursor: "pointer",
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            color: "white",
                            p: 2,
                            animation: isHover ? "none" : "$fadeInOut 2s ease-out infinite",
                        }}
                    >
                        {title}
                    </Typography>
                </div>
            ) : null}
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"

            >
                <Box sx={style}>
                    <div style={{ display: "flex" }}>
                        <img
                            width="250px"
                            height="300px"
                            style={{ display: "flex" }}
                            src={medium_cover_image}
                        ></img>
                        <Typography
                            sx={{
                                color: "white",
                            }}
                            id="keep-mounted-modal-title"
                            style={{
                                marginLeft: "16px",
                                maxHeight: "300px",
                                display: "flex",
                                width: "450px",
                            }}
                        >
                            <div
                                style={{
                                    display: "block",
                                    flexDirection: "column",
                                    // whiteSpace: "nowrap",
                                }}
                            >
                                <h2 style={{ display: "block" }}>{title}</h2>
                                <p style={{
                                    fontSize: 13,
                                    display: "block",
                                    overflow: "hidden", textOverflow: "ellipsis",
                                    maxHeight: "275px"
                                }}>
                                    {summary}
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