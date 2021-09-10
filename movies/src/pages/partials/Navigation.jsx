import React from "react";
import { Link, NavLink,  } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useQuery } from "react-query";
import { getGenre } from "../../services/TMDBApi";

const Navigation = () => {
  const { data } = useQuery("genre", getGenre);

  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Link to="/" className="navbar-brand">
          <Navbar.Brand>Movies</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </Nav.Item>
            <NavDropdown title="Movies" id="nav-dropdown">        
                <NavLink to="/movies/genres" className="dropdown-item">Genres</NavLink>           
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
