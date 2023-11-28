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

    return  (   <p >{data.site.siteMetadata.description} </p>  )
}

export default Footer


