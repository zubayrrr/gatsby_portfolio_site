import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Scrollbars } from "react-custom-scrollbars"
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
      <Scrollbars
        style={{ height: "100vh" }}
        renderTrackHorizontal={props => (
          <div {...props} className="track-horizontal" />
        )}
      >
        <Navigation pageWrapId={"page-wrap"} outerContainerId={"App"} />

        <div id="page-wrap">{children}</div>
      </Scrollbars>
    </div>
  )
}

export default Layout
