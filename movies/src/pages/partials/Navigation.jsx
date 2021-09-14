import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useGenresContext } from "../../contexts/GenresContext";
import { Search } from 'react-bootstrap-icons'

const Navigation = () => {
  const { genreId } = useGenresContext();

  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Link to="/" className="navbar-brand">
          <Navbar.Brand>Movies</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </Nav.Item>
            <NavDropdown title="Movies" id="nav-dropdown">
              <NavLink
                to={`/movies/genres/${genreId}`}
                className="dropdown-item"
              >
                Genres
              </NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav >
          <NavLink to={"/movies/search"}  className="search-icon" >
            <Search size={22}  className="search-icon" />
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
