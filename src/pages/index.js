import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
const IndexPage = () => {
  return (
    
   <Layout  >
     <Head home_title="Home" />
     <h1> Hello !</h1>
        <h2>I am Abdul, a full-stack developer living in London, Ontario.</h2> 
        <p><h2>SKILLS</h2>
        <ul>
          <li>ReactJS [ Gatsby ]</li>
          <li>Laravel [PHP] </li>
          <li>SQL</li>
          <li>GIT & Github</li>
        </ul>
        </p> 
   </Layout>   
  )
}

export default IndexPage;