import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Scrollbars } from "react-custom-scrollbars"
import Fade from "react-reveal/Fade"
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
    <Scrollbars
      style={{ height: "100vh" }}
      renderTrackHorizontal={props => (
        <div {...props} className="track-horizontal" />
      )}
    >
      <Fade top>
        <Navigation />
      </Fade>
      {children}
    </Scrollbars>
  )
}

export default Layout
