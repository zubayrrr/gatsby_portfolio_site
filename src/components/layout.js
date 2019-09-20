import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Navigation from "./Globals/Navigation"

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
    </div>
  )
}

export default Layout
