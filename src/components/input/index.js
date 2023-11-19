import React, { useState } from "react";
import "./input.css";


const Input = (props) => {

  const placeholderAlterado = `${props.placeholder}...`  

  const [valor, setValor] = useState ('')

  const aoDigitar = (evento) => {
        props.alterado(evento.target.value)
  }

  return (
    
      <div className="row">
          <div className="col-25">
              <label htmlFor="nome">
                {props.label}
              </label>
          </div>
          <div className="col-75">
              <input type="text" id="nome" name="nome" placeholder={placeholderAlterado}
                value={props.valor}  required={props.obrigatorio} onChange={aoDigitar}  />
          </div>
      </div>
    
    )
  }
 





export default Input