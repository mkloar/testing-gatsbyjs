import React from 'react'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogList from '../templates/blog-list'

const IndexPage =  ({ data, pageContext }) => {
  return (
    <Layout title={data.site.siteMetadata.title}>
      <div>
        <h1>
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <BlogList blogs={data.allMarkdownRemark} pageContext={pageContext} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query neki($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`