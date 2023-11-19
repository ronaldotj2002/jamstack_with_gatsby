import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import "./layout.css";
import Menu from '../../_include/menu.mdx';
import Footer from './footer';
import Img from 'gatsby-image';


const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title                
            }
        }
        file(relativePath: {eq: "logo.png"}) {
            childImageSharp {
              fluid{
                base64
                src
                aspectRatio
                sizes
                srcSet
              }
            }
          }
    }`) 

    return  (
       
        <body>        
           <header className="container">

            <figure>
               <Img 
                fluid = {data.file.childImageSharp.fluid}
                alt="Logo Gatsby"
                />
            </figure> 
           <h1>{data.site.siteMetadata.title}</h1>
           
            <nav id='menu'>
                <Menu />               
            </nav>            
           </header>
            
            <main className="container">
                <h1>{ pageTitle }</h1>
                { children }
            </main>

        
            <footer>
                <Footer/>
            </footer>
        </body>
    )
}

export default Layout


