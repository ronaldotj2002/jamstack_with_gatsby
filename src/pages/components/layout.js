import * as React from 'react';
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    return  (
        <div>
            <hr/>
            
            <nav>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Página 2</Link>
                    </li>
                </ul>
            </nav>            
            <hr/>
            <main>
                <h1>{ pageTitle }</h1>
                { children }
            </main>
        
        </div>
    )
}

export default Layout


