import React, { Component } from "react"
import "./Footer.css"
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div class="row ">
            <div class="col">
              <p class="copyright text-center text-muted">
                Copyright &copy; Your Website 2019
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
