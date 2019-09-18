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
          <Row className="mb-5">
            <div className="col-lg-8 col-md-10 mx-auto ">
              {this.state.posts
                .slice(0)
                .reverse()
                .map(post => {
                  return (
                    <div className="post-preview my-5">
                      <a href={post.slug} className="blog_title">
                        <img
                          src={post.jetpack_featured_media_url}
                          alt={post.title}
                        />
                        <h1 className="post-title">{post.title}</h1>
                        <h4
                          className="post-subtitle"
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt,
                          }}
                        />
                      </a>
                      <p className="post-meta" className="text-secondary">
                        Posted on &nbsp;
                        {new Date(post.date).toDateString()}
                      </p>
                    </div>
                  )
                })}
            </div>
          </Row>
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
