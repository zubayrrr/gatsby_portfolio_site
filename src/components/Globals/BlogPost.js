import React from "react"
import { graphql, Link } from "gatsby"
import "./BlogPost.css"
import Layout from "../layout"

const BlogPost = ({ data }) => {
  const post = data.wordpressPost

  return (
    <Layout>
      <div className=" blogpost-wrapper">
        <div className="container ">
          <div className="row justify-content-md-center">
            <div className="col-lg-10 offset-lg-1 text-left blogpost">
              <h1
                dangerouslySetInnerHTML={{ __html: post.title }}
                className=" mt-5"
              />
              <p className="blog-meta" className="text-secondary small mb-5">
                Posted on &nbsp;
                {new Date(post.date).toDateString()}
              </p>
              <img
                className="blogpost_img"
                src={post.jetpack_featured_media_url}
                alt={post.title}
              />

              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="blogpost_content"
              />
              <Link to="/blog">
                {" "}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABm0lEQVRIic2VMUscQRiGn5nvPC2NZRJnrf0DajwPLI40BkSjqYQUISkS01jrb9AijY0INlEImCKQ6uBud39AmhQB4S5qIxICmsDFmbE5C8G7vd1bIW/9zvvMN8w7A/+zxqoMj0bysptH9xE+5IpyqGAniPRavgCPdkXZA8rAiXh30MlayJJvYtkEFoFzpW3laIpmJ2/qCUyoN4BV4C9ezTem+J5lk3cqCOWVicSbSK6CUBZyCwYwscyZSP6ZSHwQ67e5hj+uD0yYUC7a4etp1qokg6kxjkgdGAG2m9P2TRpA11s0GvIQJV/a4Z+bLZv6aDoCTJ0HKP0VCIC6btkXzHKVFpC5yX0DmjP88t49BRrAjBuUfarpi9l1gp8lTp3YioIzPM9MUT7kCgA4nuSHVXoOzyXwut3k/HWraKF+1+u6xB7cgkSyAuwCTnmWGyX7Ke1GExXEer39Hv0xYaGU5E81wY1MVNgC/x747UTKx5Otb7kC8GgTy0fgOXBS8PbJUenuPyFb0RROt+wKUAMeWaWXMuUkqZdP/951DfIvf3mR/eF9AAAAAElFTkSuQmCC" />
                Blog page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      date
      content
      title
      jetpack_featured_media_url
    }
  }
`
