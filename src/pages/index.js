import React from 'react'
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogList from '../components/BlogList'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <BlogList blogs={data} />
      </div>
    </Layout>
  )
}


export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          html
        }
      }
    }
  }`