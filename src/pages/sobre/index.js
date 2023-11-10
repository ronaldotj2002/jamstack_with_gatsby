import * as React from "react"
import Layout from '../../components/layout'
import "../styles.css"

const Sobre = () => {
  return (
    <Layout pageTitle="Sobre">
      <div className="content">
        <p>Página -  Sobre</p> 
      </div>
    </Layout>
  )
}

export const Head = () => <title>Sobre </title>
export default Sobre;
