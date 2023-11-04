import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';


const Footer = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                description
            }
        }
    }`) 

    return  (
                  
            <footer>
                <p>{data.site.siteMetadata.description} </p>
            </footer>
       
    )
}

export default Footer


