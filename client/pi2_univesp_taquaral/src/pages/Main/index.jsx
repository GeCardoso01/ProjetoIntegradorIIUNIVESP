import { Link } from 'react-router-dom'

//imports Bootstraps
import Container  from 'react-bootstrap/Container'

//import CSS
import "../../App.css"



function Main() {
    return (
        <body class="INDEX">         
            <Link class="link" to="/"> <h1> Página inicial </h1></Link> 
  
            <ul>
                <li>
                    <Link to="/form"> Registre-se </Link> 
                </li>
                <li>
                    <Link to="/login"> Login </Link> 
                </li>
            </ul>
            <section class="u-align-center u-clearfix u-section-1" id="sec-e7af">
      <div class="u-clearfix u-sheet u-sheet-1">
	    <h1 class="u-text u-text-default u-text-2">RECICLA ELETRON</h1>
		
        <h5 class="u-text u-text-default u-text-1"> ENCONTRE O PONTO DE COLETA MAIS PRÓXIMO DO SEU BAIRRO</h5>
        <p class="u-text u-text-3"> A reciclagem é uma importante ferramenta para podermos amenizar o grande problema do acúmulo de lixo no mundo, mas também é importante nós reciclarmos nossas idéias, conceitos e valores para que sejamos seres humanos melhores e mais conscientes.</p>
      </div>
    </section>
    <div class="TabControl">
	<div id="header">
		<ul class="abas">
			<li>
				<div class="aba">
					<span>Um futuro melhor</span>
				</div>
			</li>
			<li>
				<div class="aba">
					<span>Ajudando o mundo</span>
				</div>
			</li>
			<li>
				<div class="aba">
					<span>Evitando poluição</span>
				</div>
			</li>
			<li>
				<div class="aba">
					<span>Reciclando</span>
				</div>
			</li>
		</ul>
	</div>
	<div id="content">
		<div class="conteudo">
		<b>DIREITOS RESERVADOS RECICLA ELETRON 2022</b>
		</div>
	</div>
</div>
        </body>

    )
}

export default Main
