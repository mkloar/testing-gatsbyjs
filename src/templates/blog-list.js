import React from 'react'
import { Blog } from '../theme'
import { Link } from 'gatsby'


const BlogList = ({ blogs, pageContext, prefetch }) => {

    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
        <section>
            {blogs.edges.map(({ node }) =>  {
                if(prefetch) {
                    return (
                        <Link to={`/blog/${node.fields.slug}`} key={node.id}>
                            <Blog>                        
                                <h3>{ node.frontmatter.title }</h3>
                            </Blog>   
                        </Link>
                    )
                }
                return (
                    <a href={`/blog/${node.fields.slug}`} key={node.id}>
                        <Blog>                        
                            <h3>{ node.frontmatter.title }</h3>
                        </Blog>   
                    </a>
                )
                           
            })}
            <ul
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                listStyle: 'none',
                padding: 0,
            }}
            >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/${i === 0 ? '' : i + 1}`}
                style={{
                  padding: 10,
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#007acc' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
        </section>
    )
}

BlogList.defaultProps = {
    prefetch: true
}

export default BlogList


/*export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
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
`*/