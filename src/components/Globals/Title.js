import React from "react"
import "./Title.css"

const Title = ({ title }) => {
  return (
    <div className="title-sub-wrapper">
      <h1 className="title-sub bg-primary text-uppercase py-2 text-center font-weight-bold">
        {title}
      </h1>
    </div>
  )
}

export default Title
