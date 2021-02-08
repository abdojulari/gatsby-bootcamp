import React from 'react'
import Layout from '../components/layout'
import {  graphql } from 'gatsby'
import Head from '../components/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from "@contentful/rich-text-types"
export const query = graphql`
    query($slug: String!){
        post: contentfulBlogPost(slug:{eq:$slug}){
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body{
                raw
                references{
                    contentful_id
                    title
                    fixed{
                        src
                    }
                }
            }
        }
    }
`

const Content = (props) => {
    const assets = new Map(props.data.post.body.references.map(ref => [ref.contentful_id,ref]))
    const options = {
        renderNode:{
            [BLOCKS.EMBEDDED_ASSET]: node => {
                const url = assets.get(node.data.target.sys.id).fixed.src
                const alt = assets.get(node.data.target.sys.id).title
                return <img alt={alt} src={url}/>
            }
        }
    }
    
    return(
        <Layout>
            <Head home_title={props.data.post.title}/> 
            <h1>{props.data.post.title}</h1>
            <p>{props.data.post.publishedDate}</p>
            {documentToReactComponents(JSON.parse(props.data.post.body.raw),options)}
        </Layout>
    )
}

export default Content



