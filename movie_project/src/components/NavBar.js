import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../scroll.css";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ search, setSearch }) => {
  //Link 컴포넌트를 사용하지 않고 다른 페이지로 이동해야 할때 사용
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goArticles = () => {
    //articles 경로로 이동
    //replace: true는 페이지를 이동할때 현재 페이지를 기록에 남기지 않는다.
    navigate("/articles", { replace: true });
  };

  const navbar = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const goSearch = (e) => {
    setSearch(e.target.value);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const expand = "sm";
  return (
    <>
      <Navbar
        fixed="top"
        key={expand}
        bg="dark"
        expand={expand}
        className="mb-3"
      >
        <Container fluid>
          <Offcanvas show={show} onHide={handleClose} placement="start">
            <Offcanvas.Header
              closeButton
              aria-labelledby="offcanvasNavbarLabel-expand-left"
            >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-left`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`ffcanvasNavbarLabel-expand-left`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
          <Nav className="justify-content-around flex-grow-1 pe-3">
            {GiHamburgerMenu}
            <Navbar.Brand>
              <Nav.Link
                style={{
                  fontSize: "2em",
                  color: "red",
                  fontWeight: "bold",
                }}
                className="d-none d-md-flex"
              >
                NETFLIX
              </Nav.Link>
            </Navbar.Brand>
            <Form className="d-flex mb-3 mt-3">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={goSearch}
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Nav>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-right`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-right`}
            aria-labelledby={`offcanvasNavbar-expand-right`}
            placement="end"
          >
            <Offcanvas.Header
              closeButton
              aria-labelledby="offcanvasNavbarLabel-expand-right"
            >
              <Offcanvas.Title
                id={`offcanvasNavbar-expand-right`}
                className="red"
              >
                NETFLIX
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav.Link className="d-sm-none" href="#action2">
                Settings
              </Nav.Link>
              <Nav.Link className="d-sm-none" href="#action2">
                Link
              </Nav.Link>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
{
  /* searchBar input의 onChange함수에 처음 값이 바뀌었을 때 state값 변경, Link를 searchResult로 이동
    logout버튼 누르면 Link는 / 로 이동(처음 로그인 페이지) 아니면 Navigate로 맨 처음으로 이동
    button 버튼은 모두 li로 바꾸고 float로 띄운다음에 각각 link연결, bootstrap으로 아이콘 삽입
    
  */
}
