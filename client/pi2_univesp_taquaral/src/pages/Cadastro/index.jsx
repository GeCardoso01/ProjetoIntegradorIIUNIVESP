//import do componente Form
import Formulario from "../../components/FormRegister"

//react-router
import { Link } from 'react-router-dom'

//css
import './cadastro.css'


function paginaInicial() {
    return (
<div>

<div class="container-principal"></div>

    <header>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/cadastro">Cadastro</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    </header>

    <h1><a>Cadastre sua Empresa para ser um Ponto de Coleta de Recicláveis EletroEletrônicos !</a>
    </h1>


        <h1><Formulario /></h1>
        
  
    <h4><strong>Seus Dados estão Protegidos pela Lei LGPD </strong></h4>
  
       
        </div>
        
        
    )
}

export default paginaInicial