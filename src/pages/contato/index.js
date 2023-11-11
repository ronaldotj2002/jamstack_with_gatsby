import * as React from "react"
import Layout from '../../components/layout'
import "../styles.css"



const Conato = () => {


  return (
    <Layout pageTitle="Contato">
      <div className="content">
        <form >
          <div className="row">
            <div className="col-25">
              <label for="nome">Nome</label>
            </div>
            <div className="col-75">
              <input type="text" id="nome" name="nome" placeholder="Nome"/>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="email">E-mail</label>
            </div>
            <div className="col-75">
              <input type="email" id="email" name="email" placeholder="E-mail"/>
            </div>
          </div>          
          <div className="row">
            <div className="col-25">
              <label for="mensagem">Mensagem</label>
            </div>
            <div className="col-75">
              <textarea id="mensagem" name="mensagem" placeholder="Mensagem" ></textarea>
              <div className="row">
                <input type="submit" value="Submit"/>
              </div>
            </div>
          </div>
      </form>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Contato</title>
export default Conato;