import { Link } from 'react-router-dom'

//import CSS
import "./main.css"

function Main() {
    return (
        <div className="INDEX">         
            <Link className="link" to="/"> <h1> Página inicial </h1></Link> 
  
            <ul>
                <li>
                    <Link to="/form"> Registre-se </Link> 
                </li>
                <li>
                    <Link to="/login"> Login </Link> 
                </li>
            </ul>
            <section className="u-align-center u-clearfix u-section-1" id="sec-e7af">
      <div className="u-clearfix u-sheet u-sheet-1">
	    <h1 className="u-text u-text-default u-text-2">RECICLA ELETRON</h1>
		
        <h5 className="u-text u-text-default u-text-1"> ENCONTRE O PONTO DE COLETA MAIS PRÓXIMO DO SEU BAIRRO</h5>
        <p className="u-text u-text-3"> A reciclagem é uma importante ferramenta para podermos amenizar o grande problema do acúmulo de lixo no mundo, mas também é importante nós reciclarmos nossas idéias, conceitos e valores para que sejamos seres humanos melhores e mais conscientes.</p>
      </div>
    </section>
    <div className="TabControl">
	<div id="header">
		<ul className="abas">
			<li>
				<div className="aba">
					<span>Um futuro melhor</span>
				</div>
			</li>
			<li>
				<div className="aba">
					<span>Ajudando o mundo</span>
				</div>
			</li>
			<li>
				<div className="aba">
					<span>Evitando poluição</span>
				</div>
			</li>
			<li>
				<div className="aba">
					<span>Reciclando</span>
				</div>
			</li>
		</ul>
	</div>
	<div id="content">
		<div className="conteudo">
		<b>DIREITOS RESERVADOS RECICLA ELETRON 2022</b>
		</div>
	</div>
</div>
        </div>

    )
}

export default Main
