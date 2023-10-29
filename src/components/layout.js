import * as React from 'react';
import { Link } from 'gatsby';
import "./layout.css"


const Layout = ({ pageTitle, children }) => {
    return  (
        <div>
           <header>

           <h1>Projeto de Bloco jamstack com Gatsby</h1>
           
            <nav id='menu'>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Página 2</Link>
                    </li>
                </ul>
            </nav>            
           </header>
            
            <main>
                <h1>{ pageTitle }</h1>
                { children }
            </main>
        
        </div>
    )
}

export default Layout


