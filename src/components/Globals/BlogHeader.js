import React, { Component } from "react"
import headerImg from "../../images/headerImg.jpg"
import "./BlogHeader.css"

export default class BlogHeader extends Component {
  render() {
    return (
      <header
        class="masthead"
        style={{ backgroundImage: `url('${headerImg}')` }}
      >
        <div class="overlay" />
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="site-heading">
                <h1>Clean Blog</h1>
                <span class="subheading">A Blog Theme by Start Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
