import React from "react"
import { Link, graphql, useStaticQuery, navigate} from 'gatsby'
import headerStyles from  './header.module.scss'

const Header = () => {
const url =  typeof window !== 'undefined' ? window.location.pathname : '';
const data = useStaticQuery(graphql`
      query{
        site {
          siteMetadata {
              title
          }
        }
      } 
`)
 
const navOption = () => {
      if( (url.indexOf('/blog/') === 0) ){
          return (
            <ul className={headerStyles.navList}>
             <li className={headerStyles.navItem}><button onClick={() => {navigate(-1) }}>Back</button></li>
           </ul>
      
          )
      } else {
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