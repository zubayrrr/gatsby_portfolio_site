import React from "react"
import { Link } from "gatsby"

const success = () => {
  return (
    <div
      className="container success-wrapper  text-center"
      style={{
        height: "100vh",
        top: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="success rounded py-4 px-4">
        <img src="data:image/png;base64,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" />{" "}
        <h4 className="mt-2"> Thank you, Your submission was successful,</h4>
        <p>I look forward to being in touch shortly.</p>
        <Link to="/">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABm0lEQVRIic2VMUscQRiGn5nvPC2NZRJnrf0DajwPLI40BkSjqYQUISkS01jrb9AijY0INlEImCKQ6uBud39AmhQB4S5qIxICmsDFmbE5C8G7vd1bIW/9zvvMN8w7A/+zxqoMj0bysptH9xE+5IpyqGAniPRavgCPdkXZA8rAiXh30MlayJJvYtkEFoFzpW3laIpmJ2/qCUyoN4BV4C9ezTem+J5lk3cqCOWVicSbSK6CUBZyCwYwscyZSP6ZSHwQ67e5hj+uD0yYUC7a4etp1qokg6kxjkgdGAG2m9P2TRpA11s0GvIQJV/a4Z+bLZv6aDoCTJ0HKP0VCIC6btkXzHKVFpC5yX0DmjP88t49BRrAjBuUfarpi9l1gp8lTp3YioIzPM9MUT7kCgA4nuSHVXoOzyXwut3k/HWraKF+1+u6xB7cgkSyAuwCTnmWGyX7Ke1GExXEer39Hv0xYaGU5E81wY1MVNgC/x747UTKx5Otb7kC8GgTy0fgOXBS8PbJUenuPyFb0RROt+wKUAMeWaWXMuUkqZdP/951DfIvf3mR/eF9AAAAAElFTkSuQmCC" />
          Home page
        </Link>
      </div>
    </div>
  )
}

export default success
