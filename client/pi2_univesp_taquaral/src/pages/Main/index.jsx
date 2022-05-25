//import CSS
import "./main.css"

function Main() {
    return (

<body>
    <div class="container-principal">
        <header>

            <nav>
                <ul>
                    <li><a href="index.html">home</a></li> 
                    <li><a href="clientes.html">clientes</a></li>
                    <li><a href="sobre.html">sobre</a></li>
                    <li><a href="contato.html">contato</a></li>
                </ul>
            </nav>
        </header>

        <section id="banner"> 
            <img src="imagem/Recicla.jpg"alt="banner-topo" />
        </section>

    <div id="openModal" class="modalDialog">
            <div>
                <a href="#close" class="close">X</a>
                <h1> O que é Recicla Electron?</h1>
                <p><strong>HTML</strong> <i>(abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto)</i> é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. - <i> wikipedia.org - acesso 09/2016</i></p>
                <img src="imagem/PCRecicla.jpg" alt="logo html5" />
                </div>

        </div>
    <div id="openModal1" class="modalDialog">
        <div>
                <a href="#close" title="Close" class="close">X</a>
                <h1>Tecnologia - Realidade Aumentada</h1>
                <p>De uma forma simples, <b>Realidade Aumentada</b> é uma tecnologia que permite que o mundo virtual seja misturado ao real, possibilitando maior interação e abrindo uma nova dimensão na maneira como nós executamos tarefas, ou mesmo as que nósvincubimos nàs maquinas. Assim, se voçê pensava que objetos pulando para fora da tela eram elementos de filmes de ficção científica, está na hora de mudar seus conceitos. Aliás, o que acontece com a <b>Realidade Aumentada</b> é o contrário: voçê pulará para dentro do mundo virtual para interagir com objetos que só estão limitados à sua imaginação. - <i>tecmundo.com.br/realidade-aumentada - acesso 09/2016</i></p>
                <img src="imagem/R.jpg" alt="logo tecnologia" />
            </div>
        </div>

        <div id="openModal2" class="modalDialog">
            <div>
                <a href="#close" title="Close" class="close">X</a>
                <h1>Acessibilidade</h1>
                <p><b>Acessibilidade</b> na web significa que pessoas com deficiência podem usar a web. Mais especificamente, a acessibilidade na web significa que pessoas com deficiência podem perceber, entender, navegar, interagir e construir para a web. E mais. Ela também beneficia outras pessoas, incluindo pessoas idosas com capacidades em mudanças devido ao envelhecimento - <i>w3c.br/ - acesso 09/2016</i></p>
                <img src="imagem\Acessibilidade.jpg" alt="logo acessibilidade" />
            </div>   
        </div>


        <footer>
            <div class="footer-text">
                <h3><b>O que é Recicla Electron?</b></h3>
                <p>  - <a href="#openModal">clique aqui</a>.</p>
            </div>

            <div class="footer-text">
                <h3><b>Tecnologia</b></h3>
                <p> Você sabe o que é realidade aumentada? Entenda como essa nova tecnologia funciona. - <a href="#openModal1">clique aqui</a>.</p>
            </div>

            <div class="footer-text">
                <h3><b>Acessibilidade</b></h3>
                <p>Tornar um Site acessível para todos. - <a href="#openModal2">clique aqui</a>.</p>
            </div>
        </footer>

    </div>  
</body>









    )
}

export default Main
