import React, { Component } from "react"
import Layout from "../components/layout"
import "./about.css"
import BackgroundSection from "../components/Globals/BackgroundSection"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import Fade from "react-reveal/Fade"

import Title from "../components/Globals/Title"

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
          <Container className="about-wrapper">
            <Title title="About me" />
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <Fade top>
                  <h4 className="font-weight-bold py-2">
                    My Name is Zubayr, I'm 20 years old, self taught React
                    Developer and AWS solutions architect.
                  </h4>
                </Fade>
                <Fade>
                  <div>
                    I'm fascinated by computers and the ever evolving internet
                    technologies. I got in Web development about an year ago, I
                    made static websites for small businesses at first then my
                    focus shifted towards learning Javascript frameworks like
                    ReactJs.
                  </div>
                  <br />
                  <div>
                    I've built projects on ReactJs and GatsbyJs and also worked
                    on various other web technologies.
                  </div>
                  <br />
                </Fade>
                <Fade>
                  <div>
                    AWS had always been my interest ever since I learned about
                    hosting content on the cloud, in 2019 I thought I should
                    give it a try so I went ahead and got certified as an AWS
                    solutions architect.
                  </div>
                </Fade>
              </div>
            </div>
          </Container>
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
