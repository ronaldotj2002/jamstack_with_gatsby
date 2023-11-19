import * as React from "react"
import Layout from '../../components/layout'
import "../styles.css"

const Sobre = () => {
  return (
    <Layout pageTitle="Sobre">
      <div className="content">
        <h2>JAMstack: geleia de JavaScript, API e Markup</h2>

        <i>O que significa e por que é considerada uma arquitetura moderna de desenvolvimento web?</i>

        <p className="p-sobre">Uma arquitetura moderna de desenvolvimento, vista como vanguarda na renascença de web sites estáticos, e com nome de um doce popularmente conhecido como GELEIA.</p>

        <p className="p-sobre">Criada por Mathias Biilmann, CEO do Netlify, JAMstack é uma filosofia de criação de sites estáticos que insere conceitos e práticas específicas dentro de um ecossistema tecnológico.</p>

        <p className="p-sobre">O objetivo de Mathias, apesar de diversas justificativas técnicas, era tornar a geração de sites estáticos legal e mainstream, novamente. Segundo ele, a arquitetura moderna da JAMstack:</p>

        <p className="p-sobre">
          <span className="ap">"</span>
          "não é sobre tecnologias específicas. É um novo jeito de criar websites e aplicativos que entreguem melhor performance, alta segurança, baixo custo de escalabilidade, e experiência de desenvolvimento"</p>

        <p className="p-sobre">A base de toda estrutura <b>JAM</b> está na geleia do nome: <b>JAM</b> = <b>JavaScript</b>, <b>APIs</b> e <b>Markup</b>.</p>

        <br />

        <h2>JAM</h2>

        <ul>
          <li>
            JavaScript, obviamente, é o componente responsável em popularizar a arquitetura. A linguagem é amplamente utilizada no mercado de desenvolvimento web. Em poucas palavras:
            JavaScript é o que providencia todas as funcionalidades dinâmicas e interativas para o sistema, sem restrições de frameworks (React, Vue, Angular, Svelte e afins)

          </li>
          <br />
          <li>
            Todas as funções do servidor, ou banco de dados, são manuseadas por APIs reutilizáveis, acessadas por HTTPS com JS.
          </li>
          <br />
          <li>
            Markup é o arquivo estático gerado por ferramentas de desenvolvimento de páginas web, como NextJS, Gatsby ou Create-React-App.
          </li>

        </ul>
        <br/><br/>
        <h2>Benefícios no fluxo de trabalho</h2>

        <p className="p-sobre">Em linhas gerais, numa definição bem abrangente, são sites desenvolvidos sem a dependência de um servidor. Entre os benefícios promovidos por esta arquitetura, estão: performance,
          segurança, baixo custo de escalabilidade e melhor experiência dev. Você pode conferir mais sobre JAMstack neste pequeno guia de boas práticas.
        </p>

        <p className="p-sobre">
          NextJS e Gatsby são ferramentas extremamente populares e poderosas no ecossistema de desenvolvimento JavaScript, a arquitetura de ambas foi construída com base nas boas práticas e na filosofia do JAMstack.
        </p>

        <p className="p-sobre">
          Caso em algum momento você criou sites estáticos utilizando um destes frameworks, você aderiu, mesmo que inconscientemente, ao JAMstack de forma automatizada.
        </p>

        <p className="p-sobre">
          No último #Decode, Diego Fernandes (CTO - Rocketseat) apresentou em LIVE a construção de apps JAMstack utilizando React e GraphQL.
        </p>
        <br/>

        <h2>Comunidade ainda é fator essencial</h2>

        <p className="p-sobre">
          Apesar de ser visto como o “futuro do desenvolvimento web” como algumas arquiteturas e tecnologias prometem, é preciso de cuidados antes de afirmar qualquer previsão do tipo.
        </p>
        <p className="p-sobre">
          O crescimento da comunidade em volta dessa filosofia vem de casos de sucesso de novas tecnologias que aplicaram a arquitetura: Netlify, Gatsby, Contentful — para citar algumas.
        </p>
        <p className="p-sobre">
          Apesar de não estar mais em fase experimental, JAMstack ainda pode ser considerado um jeito novo, inédito, de programar, mas não é o único.
        </p>
        <p className="p-sobre">
          A primeira conferência exclusiva sobre JAMstack, para você ter uma ideia de quão recente ainda é, <a href="https://2018.jamstackconf.com/" target="_blank"> aconteceu em 2018</a>.
        </p>
        
      </div>
    </Layout>
  )
}

export const Head = () => <title>Sobre </title>
export default Sobre;
