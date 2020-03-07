const { resolve } = require('path')

module.exports = async ({ actions, graphql }) => {
    const { createPage } = actions

    const articleTemplate = resolve(__dirname, '../src/templates/blog-template.js')

    const allMarkdownRemark = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }`
    )

    if (allMarkdownRemark.errors) {
        console.error(allMarkdown.errors)

        throw Error(allMarkdown.errors)
    }


    allMarkdownRemark.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: `/blog${node.fields.slug}`,
            component: articleTemplate,
            context: { 
                slug: node.fields.slug 
            }, // additional data can be passed via context
        })
    })

}