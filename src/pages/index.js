import * as React from "react"
import Layout from '../components/layout'
import "./styles.css";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title                
            }
        }
        file(relativePath: {eq: "banner.png"}) {
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
  return (
    
    <Layout pageTitle="">
      <div className="content">

        <Img fluid = {data.file.childImageSharp.fluid}
                alt="Banner"
                />

        <p id="p2">Iniciando os primeiros passos com Jamstack e gatsby \°/</p> 
      </div>
    </Layout>
    
    )
  }
 




export const Head = () => <title>Home Page</title>
export default IndexPage
