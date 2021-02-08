import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql} from 'gatsby'
const Head = ({home_title}) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <Helmet title={`${home_title} | ${data.site.siteMetadata.title}`} />
    )
}

export default Head