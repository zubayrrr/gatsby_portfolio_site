import React from "react"
import { graphql } from "gatsby"
import "./BlogPost.css"
import Layout from "../layout"

const BlogPost = ({ data }) => {
  const post = data.wordpressPost

  return (
    <Layout>
      <div className="container">
        <div className="row my-5 justify-content-md-center">
          <div className="col-lg-8 col-md-10 col-sm-6 text-center blogpost">
            <img
              className="blogpost_img"
              src={post.jetpack_featured_media_url}
              alt={post.title}
            />
            <h1
              dangerouslySetInnerHTML={{ __html: post.title }}
              className="mt-5"
            />
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-center my-5 blogpost_content"
            />
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
      content
      title
      jetpack_featured_media_url
    }
  }
`
