import React, { Component } from "react"
import Layout from "../components/layout"

export default class contact extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <form
            name="contact"
            method="POST"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
            style={{ marginTop: "100px" }}
          >
            <input type="hidden" name="bot-field" style={{ opacity: "0" }} />
            <input type="hidden" name="form-name" value="contact" />

            <div className="form-group">
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  rows="6"
                />
              </div>
            </div>

            <button type="submit" className="form-button text-center">
              Send
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}
