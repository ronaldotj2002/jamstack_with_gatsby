
import React, { useState } from "react";
import Layout from '../../components/layout'
import Input from '../../components/input'
import InputEmail from '../../components/input-email'
import Text from '../../components/textArea/TextArea'
import "../styles.css"



const Conato = () => {
  

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setmensagem] = useState('');



  const salvar = (evento) => {
    evento.preventDefault()
    console.log("Foi enviado", evento.target[0].value )
    alert( `Olá ${nome}, Sua mensagem foi enviada!`)
    window.location.href = "/";    
       
  }

 


  return (
    <Layout pageTitle="Contato">
      <div className="content">
        <form name="contato" onSubmit={salvar} data-netlify="true" data-netlify-honeypot="bot-field">
          <Input label="Nome:" obrigatorio={true} placeholder="Nome" valor={nome} alterado={valor => setNome(valor)}/>
          <InputEmail label="E-mail:" obrigatorio={true} placeholder="E-mail" valor={email} alterado={valor => setEmail(valor)}/>          
          <Text label="Mensagem:" obrigatorio={true} placeholder="Mensagem" valor={mensagem} alterado={valor => setmensagem(valor)}/>
          <div className="row">
            <input type="submit" value="Enviar" />
          </div>
      </form>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Contato</title>
export default Conato;