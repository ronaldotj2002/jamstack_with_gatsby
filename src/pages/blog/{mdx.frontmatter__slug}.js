import * as React from "react"
import Layout from '../../components/layout'
import { graphql, Link } from "gatsby"
import "./style.css";



const Slug = ({data, children}) => {
    
       return (
        
           <Layout>
            <div className="content">
                <p class="btn-voltar">
                    <Link to={`/blog/`}>
                        Voltar
                    </Link> 
                </p>
                
                <br/>
                <h2 class="post">{data.mdx.frontmatter.title}</h2>
                <p >Data de Postagem: {data.mdx.frontmatter.date}</p>

                {children}

                
            </div>
        </Layout>
    )
  }


export const query = graphql`
    
        query ($id: String) {
            mdx(id: {eq: $id}) {                
                frontmatter {
                    title
                    date(formatString: "DD/MM/YYYY")
                  }                                 
              }
        }

    `

export const Head = ({data}) => <title>{data.mdx.frontmatter.title}</title>

export default Slug