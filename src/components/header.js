import React from "react"
import { Link, graphql, useStaticQuery} from 'gatsby'
//import './header.module.scss'

import headerStyles from  './header.module.scss'

const Header = () => {

  const data = useStaticQuery(graphql`
      query{
        site {
          siteMetadata {
              title
          }
        }
      } 
    `)
  const url =  typeof window !== 'undefined' ? window.location.pathname : '';
  const navOption = () => {
      if( (url === '/') || (url === '/about') || (url === '/blog') || (url === '/contact')){
          return (
            <ul className={headerStyles.navList}>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/"> 
                Home
              </Link>
            </li>
            <li>
              <Link className={headerStyles.navItem } activeClassName={headerStyles.activeNavItem} to="/about"> 
                  About
                </Link>
              </li>
            <li>
              <Link className={headerStyles.navItem } activeClassName={headerStyles.activeNavItem} to="/blog"> 
                Blog
              </Link></li>
            <li>
                  <Link className={headerStyles.navItem } activeClassName={headerStyles.activeNavItem} to="/contact"> 
                  Contact
                  </Link>
              </li>
          </ul>
          )
      } else {
         return (
           <ul className={headerStyles.navList}>
             <li className={headerStyles.navItem}><Link to='/blog'>Back</Link></li>
           </ul>
         )
      }
    
  }
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
            {data.site.siteMetadata.title}
        </Link>
      </h1>
        { navOption()}
    </header>
  )
}

export default Header;