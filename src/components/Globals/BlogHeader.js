import React, { Component } from "react"
import headerImg from "../../images/headerImg.jpg"
import "./BlogHeader.css"

export default class BlogHeader extends Component {
  render() {
    return (
      <header
        class="masthead"
        style={{
          backgroundImage: `url('${headerImg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="container text-center ">
          <div class="row align-items-center">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="site-heading ">
                <h1>&lt; Blog Articles /&gt;</h1>
                <span class="subheading ">
                  by
                  <span className="text-pokemon"> Zubayr</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
