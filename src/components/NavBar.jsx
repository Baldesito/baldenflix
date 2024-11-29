import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar
      bg="#221f1f"
      variant="dark"
      expand="lg"
      style={{ backgroundColor: "#221f1f ! important" }}
    >
      <div className="container-fluid">
        <Navbar.Brand href="#">
          <img
            src="./logo.png"
            style={{ width: "100px", height: "55px" }}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link className="fw-bold text-white" href="#">
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              TV Shows
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              Movies
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              Recently Added
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#">
              My List
            </Nav.Link>
            <NavDropdown
              title="More"
              id="basic-nav-dropdown"
              className="fw-bold"
            >
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="balde" className="fw-bold">
              Balde
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
