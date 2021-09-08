import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav,  Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark"  variant="dark" expand="md" sticky="top">
      <Container>
        <Link to="/" className="navbar-brand">
          <Navbar.Brand>Movies</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="#">Link</NavLink>         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
