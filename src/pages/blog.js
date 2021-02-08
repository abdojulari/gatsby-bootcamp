import React from 'react'
import Layout from '../components/layout'
import blogStyle from './blog.module.scss'
import Head from '../components/head'
import { Link, graphql, useStaticQuery } from 'gatsby'


const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
          allMarkdownRemark {
              edges {
                  node {
                      frontmatter {
                          title
                          date
                      }
                      fields {
                        slug
                    }
                  }
              }
          },
            allContentfulBlogPost(
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ){
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMM Do, YYYY")
                    }
                }
            }
     
        }
    `)

   
    return (
        <div>
         <Layout>
             <Head home_title="Blog" />
             <h1>Blog</h1>
             <ol className={blogStyle.posts}>
                 {data.allMarkdownRemark.edges.map((edge) => {
                     return (
                         <li key={edge.node.frontmatter.title} className={blogStyle.post}>
                             <Link to={edge.node.fields.slug}>
                                <h2 >{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                             </Link>
                         </li>
                     )
                 })}
             </ol>
             <h2>Blog Post from Contentful</h2>
              <ol className={blogStyle.posts}>
                  {data.allContentfulBlogPost.edges.map((item) => {
                      return (
                          <li key={item.node.title} className={blogStyle.post}>
                              <Link to={item.node.slug}>
                                  <h2>{item.node.title}</h2>
                                  <p>{item.node.publishedDate}</p>
                              </Link>
                          </li>
                      )
                  })}
              </ol>
         </Layout>
        

        
        </div>
    )
}

export default BlogPage