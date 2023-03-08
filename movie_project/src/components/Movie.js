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
        width: 620,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,
        display: "flex"
    };
    const style2 = {
        display: 'flex'
    }
    const [isHover, setIsHover] = React.useState(false);
    const handleHover = () => setIsHover(true);
    const handleLeave = () => setIsHover(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
        e.stopPropagation();
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    return <div
        style={{
            position: "relative",
            width: "100%",
            height: "100%",
        }}
    >
        <img
            src={medium_cover_image}
            alt={title}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onClick={handleOpen}
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "all 0.3s ease-out",
                transform: isHover ? "scale(1.5)" : "scale(1)",
                cursor: "pointer",
            }}
        />
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
                        style={{ display: "block" }}
                        src={medium_cover_image}
                    ></img>
                    <Typography
                        id="keep-mounted-modal-title"
                        style={{ marginLeft: "16px", width: "350px" }}
                    >
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <h2 style={{ display: "block" }}>{title}</h2>
                            <p>{summary}</p>
                        </div>
                    </Typography>
                </div>
            </Box>
        </Modal>
    </div >;
}
export default Movie;