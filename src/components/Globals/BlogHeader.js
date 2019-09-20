import React, { Component } from "react"
import headerImg from "../../images/headerImg.jpg"
import "./BlogHeader.css"

export default class BlogHeader extends Component {
  render() {
    return (
      <header
        className="masthead"
        style={{
          backgroundImage: `url('${headerImg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-center ">
          <div className="site-heading">
            <h1 className="text-green">&lt; Blog Articles /&gt;</h1>
            <span className="subheading ">
              by
              <span className="text-pokemon"> Zubayr</span>
            </span>
          </div>
        </div>
      </header>
    )
  }
}
