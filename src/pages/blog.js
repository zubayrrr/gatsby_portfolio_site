import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row } from "react-bootstrap"
import { Link } from "gatsby"
import "./blog.css"

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

export default class blog extends Component {
  constructor({ data }) {
    super(data)
    console.log(data.allWordpressPost)
    this.state = {
      posts: data.allWordpressPost.nodes,
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Blog" />
        <Container id="top">
          {/* <Row className="mb-5"> */}
          <div>
            {this.state.posts
              .slice(0)
              .reverse()
              .map(post => {
                return (
                  <div className="row align-items-center blog  p-5 my-3">
                    <div className="col-lg-5 col-md-12 col-sm-12 mx-auto blog-1">
                      <img
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        src={post.jetpack_featured_media_url}
                        alt={post.title}
                      />
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12  mx-auto blog-2">
                      <a href={post.slug} className="blog-link">
                        <h1 className="blog-title">{post.title}</h1>
                        <p className="blog-meta" className="text-secondary">
                          Posted on &nbsp;
                          {new Date(post.date).toDateString()}
                        </p>
                        <span
                          className="blog-subtitle"
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt,
                          }}
                        />
                      </a>
                    </div>
                  </div>
                )
              })}
          </div>
          {/* </Row> */}
        </Container>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        slug
        id
        date
        jetpack_featured_media_url
        author
        title
        excerpt
        content
      }
    }
  }
`
