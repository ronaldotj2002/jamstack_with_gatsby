import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from '../../components/layout'
import "../styles.css";
import "./style.css";



const Blog = () => {

    const data = useStaticQuery(graphql`
    
        query MyQuery {
            allMdx(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  frontmatter {
                    date(formatString: "DD-MM-YYYY")
                    title
                    slug
                  }
                  id
                }
              }
        }

    `)

    return (
        <Layout>
            <div className="content">
                <p>Posts mais recentes:</p>
                <ul>
                    {
                        data.allMdx.nodes.map(node=> (
                            <article key={node.id}>
                                <h2> 
                                    <Link to={`/blog/${node.frontmatter.slug}`}>
                                        {node.frontmatter.title} 
                                    </Link>      

                                </h2>
                                
                            </article>
                        ))
                    }
                </ul>
            </div>
        </Layout>
    )
}

export const Head = () => <title>Blog</title>

export default Blog