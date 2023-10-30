import * as React from 'react';
import { Link } from 'gatsby';
import "./layout.css"
import Menu from '../../_include/menu.mdx'


const Layout = ({ pageTitle, children }) => {
    return  (
        <div>
           <header className="container">

           <h1>Projeto de Bloco jamstack com Gatsby</h1>
           
            <nav id='menu'>
                <Menu />
                {/* <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul> */}
            </nav>            
           </header>
            
            <main className="container">
                <h1>{ pageTitle }</h1>
                { children }
            </main>

        
            <footer>
                <p>Aqui fica o Rodapé</p>
            </footer>
        </div>
    )
}

export default Layout


