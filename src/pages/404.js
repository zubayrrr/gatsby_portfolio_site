import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div
      className="container text-center"
      style={{
        height: "100vh",
        top: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Fade>
          <img src="https://img.icons8.com/plasticine/100/000000/road-closure.png"></img>
          <p>
            You just hit a route that doesn&#39;t exist... the sadness.
            <br />
            Unless you were looking for a 404 page, in which case:
            <span className="font-weight-bold">
              {" "}
              Kudos! you totally found it.
            </span>
          </p>
        </Fade>
        <Fade bottom>
          <Link to="/">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABm0lEQVRIic2VMUscQRiGn5nvPC2NZRJnrf0DajwPLI40BkSjqYQUISkS01jrb9AijY0INlEImCKQ6uBud39AmhQB4S5qIxICmsDFmbE5C8G7vd1bIW/9zvvMN8w7A/+zxqoMj0bysptH9xE+5IpyqGAniPRavgCPdkXZA8rAiXh30MlayJJvYtkEFoFzpW3laIpmJ2/qCUyoN4BV4C9ezTem+J5lk3cqCOWVicSbSK6CUBZyCwYwscyZSP6ZSHwQ67e5hj+uD0yYUC7a4etp1qokg6kxjkgdGAG2m9P2TRpA11s0GvIQJV/a4Z+bLZv6aDoCTJ0HKP0VCIC6btkXzHKVFpC5yX0DmjP88t49BRrAjBuUfarpi9l1gp8lTp3YioIzPM9MUT7kCgA4nuSHVXoOzyXwut3k/HWraKF+1+u6xB7cgkSyAuwCTnmWGyX7Ke1GExXEer39Hv0xYaGU5E81wY1MVNgC/x747UTKx5Otb7kC8GgTy0fgOXBS8PbJUenuPyFb0RROt+wKUAMeWaWXMuUkqZdP/951DfIvf3mR/eF9AAAAAElFTkSuQmCC" />
            Home page
          </Link>
        </Fade>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
