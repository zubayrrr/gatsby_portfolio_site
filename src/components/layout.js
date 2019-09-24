import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Navigation from "./Globals/Navigation"
import Footer from "./Globals/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="App">
      <Navigation pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
