import React from "react"
import BackgroundImage from "gatsby-background-image"
import "../../components/layout.css"
import "./BackgroundSection.css"

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  return (
    <header className="masthead">
      <BackgroundImage
        style={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={styleClass}
        fluid={img}
      >
        <h1 className="title text-green text-uppercase text-center font-weight-bold px-4 py-2">
          {title}
        </h1>
        {children}
      </BackgroundImage>
    </header>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
