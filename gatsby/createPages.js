const { resolve } = require('path')

module.exports = async ({ actions, graphql }) => {
    const { createPage } = actions

    const articleTemplate = resolve(__dirname, '../src/templates/blog-template.js')

    const allMarkdownRemark = await graphql(`
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
    )

    if (allMarkdownRemark.errors) {
        console.error(allMarkdown.errors)

        throw Error(allMarkdown.errors)
    }


    allMarkdownRemark.data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log(node)
        createPage({
            path: `/blog/${node.frontmatter.path}`,
            component: articleTemplate,
            context: { node }, // additional data can be passed via context
        })
    })

}