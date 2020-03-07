import React from 'react'
import { Template } from '../theme'

const BlogTemplate = ({ pageContext: { node } }) => (
    <Template>
        <h1>{ node.frontmatter.title }</h1>
        <section dangerouslySetInnerHTML={{ __html: node.html }} />
    </Template>
)

export default BlogTemplate