import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"
import "./blog.css"
import BackgroundSection from "../components/Globals/BackgroundSection"

export default class blog extends Component {
  constructor({ data }) {
    super(data)
    this.state = {
      posts: data.allWordpressPost.nodes,
      BackgroundSection: data.BackgroundSection.childImageSharp,
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Blog" />
        <BackgroundSection
          title="<Blog Articles />"
          styleClass="background-section-blog"
          img={this.state.BackgroundSection.fluid}
        />
        <Container>
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

    BackgroundSection: file(relativePath: { eq: "blog-bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
