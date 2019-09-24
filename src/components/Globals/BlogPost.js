import React from "react"
import { graphql } from "gatsby"
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
