import * as React from "react"
import Layout from '../components/layout'
import "./styles.css";


const IndexPage = () => {
  return (
    
    <Layout pageTitle="Página Inicial">
      <div className="content">
        <p id="p2">Iniciando com os primeiros componentes</p> 
      </div>
    </Layout>
    
    )
  }
 




export const Head = () => <title>Home Page</title>
export default IndexPage
