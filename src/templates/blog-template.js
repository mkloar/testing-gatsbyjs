import React from 'react'
import { Link } from 'gatsby'
import { Template, BackButton } from '../theme'

const BlogTemplate = ({ pageContext: { node } }) => (
    <Template>
        <BackButton>
            <Link to="/">Nazaj</Link>
        </BackButton>
        <h1>{ node.frontmatter.title }</h1>
        <section dangerouslySetInnerHTML={{ __html: node.html }} />
    </Template>
)

export default BlogTemplate