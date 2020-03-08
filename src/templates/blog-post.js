import React from 'react'
import { Link, graphql } from 'gatsby'
import { Template, BackButton } from '../theme'

const BlogPost = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Template>
            <BackButton>
                <Link to="/">Nazaj</Link>
            </BackButton>
            <h1>{post.frontmatter.title}</h1>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </Template>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogPost