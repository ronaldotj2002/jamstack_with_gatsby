import React, { useState } from "react";
import "./input.css";


const InputEmail = (props) => {

  const placeholderAlterado = `${props.placeholder}...`  


  const aoDigitar = (evento) => {
        props.alterado(evento.target.value)
  }

  return (
    
      <div className="row">
          <div className="col-25">
              <label htmlFor="email">
                {props.label}
              </label>
          </div>
          <div className="col-75">
              <input type="email" id="email" name="email" placeholder={placeholderAlterado}
                value={props.valor}  required={props.obrigatorio} onChange={aoDigitar}  />
          </div>
      </div>
    
    )
  }



  export default InputEmail