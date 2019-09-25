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
        <BackgroundSection
          title="Contact me"
          styleClass="about-background"
          img={this.state.BackgroundSection.fluid}
        />

        <div
          style={{
            height: "100vh",
            paddingTop: "100px",
          }}
          className="form"
        >
          <Title title="Get in touch" />
          <div className="container">
            <form
              className="mx-auto"
              name="contact"
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
