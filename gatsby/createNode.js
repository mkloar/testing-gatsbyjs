const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode, basePath: `content` })
      createNodeField({
        node,
        name: `slug`,
        value
      })
    }
  }