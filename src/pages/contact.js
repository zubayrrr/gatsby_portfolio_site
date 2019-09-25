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
            netlify-honeypot="bot-field"
            data-netlify="true"
            data-netlify-recaptcha="true"
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

            <ul
              className="actions"
              style={{
                display: "flex",
                justifyContent: "space-between",
                listStyle: "none",
              }}
            >
              <li>
                <input
                  type="submit"
                  value="Send Message"
                  className="form-button"
                />
              </li>
              <li>
                <input type="reset" value="Clear" />
              </li>
            </ul>
            <div data-netlify-recaptcha="true"></div>
          </form>
        </div>
      </Layout>
    )
  }
}
