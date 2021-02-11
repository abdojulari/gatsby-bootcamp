import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql} from 'gatsby'

const Head = ({home_title, meta}) => {

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
        <Helmet defer={false}>
            <title data-react-helmet="true">{`${home_title} | ${data.site.siteMetadata.title}`} </title>
            <meta charSet="utf-8"/>
            <meta http-equiv="x-ua-compatible" content="ie=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="note" content="environment=development"/>
            <link rel="icon" href="/favicon-32x32.png?v=bcbf30a41c553596c95add2665cb0920" type="image/png"/>
            <link rel="manifest" href="/manifest.webmanifest" crossorigin="anonymous"/>
            <meta name="theme-color" content="#9cc1e5"/>
            <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png?v=bcbf30a41c553596c95add2665cb0920"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png?v=bcbf30a41c553596c95add2665cb0920"/>
            <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png?v=bcbf30a41c553596c95add2665cb0920"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png?v=bcbf30a41c553596c95add2665cb0920"/>
            <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png?v=bcbf30a41c553596c95add2665cb0920"/>
            <link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256x256.png?v=bcbf30a41c553596c95add2665cb0920"/>
            <link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png?v=bcbf30a41c553596c95add2665cb0920"/>
            <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png?v=bcbf30a41c553596c95add2665cb0920"/>
        </Helmet>
    )
}

export default Head