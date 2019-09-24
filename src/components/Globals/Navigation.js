import React, { Component } from "react"
import { Link } from "gatsby"
import "./Navigation.css"
import { slide as Menu } from "react-burger-menu"

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
      {
        id: 4,
        path: "/about",
        text: "about",
      },
    ],
  }
  render() {
    return (
      <>
        <Menu
          {...this.props}
          style={{ zIndex: "1000000000000" }}
          right
          customBurgerIcon={
            <img
              style={{ width: "20px" }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAKklEQVRIiWNgGOqAUe4o839aWsBES8NHwSgYImA0o42CUUAHMJrRBh4AACLHBbnKcZ5AAAAAAElFTkSuQmCC"
            />
          }
          width={"280px"}
        >
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
        </Menu>
      </>
    )
  }
}
