import React, { Component } from "react"
import Layout from "../components/layout"
import Title from "../components/Globals/Title"
import BackgroundSection from "../components/Globals/BackgroundSection"
import "./contact.css"

export default class contact extends Component {
  constructor({ data }) {
    super(data)
    this.state = {
      BackgroundSection: data.BackgroundSection.childImageSharp,
    }
  }
  render() {
    return (
      <Layout>
        <div className="">
          <BackgroundSection
            title="Get in touch"
            styleClass=""
            img={this.state.BackgroundSection.fluid}
          />
        </div>

        <div
          style={{
            height: "100vh",
            top: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "60px 0 0 0",
          }}
          className="form"
        >
          <div className="container">
            <Title title="Get in touch" />
            <p className="text-center">
              *Drop me a message, I'll get back to you ASAP.
            </p>
            <form
              className="mx-auto"
              name="contact"
              action="/success"
              method="POST"
              data-netlify="true"
            >
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

              <button type="submit" className="form-button mt-3 mb-5 rounded">
                Send
              </button>
            </form>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    BackgroundSection: file(relativePath: { eq: "contactme.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
