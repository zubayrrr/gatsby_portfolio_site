import React, { Component } from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"
import "./Navigation.css"

export default class Navigation extends Component {
  state = {
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/projects",
        text: "projects",
      },
      {
        id: 3,
        path: "/blog",
        text: "blog",
      },
    ],
  }
  render() {
    return (
      <Container>
        <Navbar expand="lg" className="my-5">
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              ZUbayr<span>Ali</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {this.state.links.map(link => {
                return (
                  <Link
                    className="nav-link text-capitalize"
                    key={link.id}
                    to={link.path}
                  >
                    {link.text}
                  </Link>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
  }
}
