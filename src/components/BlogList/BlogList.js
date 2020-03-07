import React from 'react'
import { Blog } from '../../theme'
import { Link } from 'gatsby'


const BlogList = ({ blogs, prefetch }) => {
    return (
        <section>
            {blogs.allMarkdownRemark.edges.map(({ node }) =>  {
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
        </section>
    )
}

BlogList.defaultProps = {
    prefetch: true
}

export default BlogList