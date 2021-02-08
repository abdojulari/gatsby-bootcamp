const path = require('path')

module.exports.onCreateNode = ({ node, actions}) => {
    const { createNodeField } =  actions

   if (node.internal.type === 'MarkdownRemark') {

       const slug = path.basename(node.fileAbsolutePath, '.md')
       console.log('@@@@@@@@@@@', slug)
       console.log(JSON.stringify(node, undefined, 4))

       createNodeField({
           node, 
           name: 'slug',
           value: slug
       })
   }
    

}
    // 1. Get Path to template
    // 2. Get markdown data 
    // 3. Create new pages 
module.exports.createPages = async ( { graphql, actions} ) => {
    const { createPage} = actions
    const blogTemplate = path.resolve ('./src/templates/blog.js')
    const res = await graphql(`
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
        }
    `)
    // console.log(res.data.query.allMarkdownRemark.edges)
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
   
}


// From contentful 

module.exports.createPages = async ( { graphql, actions} ) => {
    const { createPage} = actions
    const blogTemplate = path.resolve ('./src/templates/content.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    // console.log(res.data.query.allMarkdownRemark.edges)
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
   
}