import React from "react";
import "./text-area.css";


const Text = (props) => {

  const placeholderAlterado = `${props.placeholder}...`  

  const aoDigitar = (evento) => {
    props.alterado(evento.target.value)
}

  return (
    
      <div className="row">
          <div className="col-25">
              <label htmlFor="mensagem">
                {props.label}
              </label>
          </div>
          <div className="col-75">
              <textarea id="mensagem" name="mensagem" placeholder={placeholderAlterado}
                value={props.valor}  required={props.obrigatorio} onChange={aoDigitar} /> 
              
          </div>
      </div>
    
    )
  }
 





export default Text