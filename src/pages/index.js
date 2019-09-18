import React from "react"
import Fade from "react-reveal/Fade"

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from "gatsby"

const IndexPage = () => (
  <Layout className="svg-bg">
    <SEO title="Home" />
    <div className="container home text-center">
      <Fade>
        <h1 className="display-1 ">
          Hello there<span>,</span>
        </h1>
      </Fade>
      <Fade bottom>
        <h4>I'm Zubayr Ali, React developer, AWS solutions architect.</h4>
        <div className="mt-4 subnav">
          <a href="">Read Resume</a>, &nbsp;
          <Link to="/projects">View Projects &rarr; </Link>
        </div>
      </Fade>
    </div>
  </Layout>
)

export default IndexPage
