import React, { Component } from "react"
import Layout from "../components/layout"
import "./about.css"
import BackgroundSection from "../components/Globals/BackgroundSection"
import SEO from "../components/seo"

export default class about extends Component {
  constructor({ data }) {
    super(data)
    this.state = {
      BackgroundSection: data.BackgroundSection.childImageSharp,
    }
  }
  render() {
    return (
      <Layout>
        <SEO title="About" />

        <div className="about">
          <BackgroundSection
            title="About me"
            styleClass="about-background"
            img={this.state.BackgroundSection.fluid}
          />
          <p>This is about page.</p>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    BackgroundSection: file(relativePath: { eq: "bruh-bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
