//import de componentes react-boostrap
import FormLogin from "../../components/FormLogin"

//import do arquivo css
import './login.css'

//react-router

import {Link} from"react-router-dom"

function Login() {
    return (

<div>    
    <div  class='login'>

        <div class="container-principal"></div>
        </div>
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
            <section id="banner"> 
            <img src="imagem/Recicla.jpg" alt="banner-topo" />
    </section>
        
        

            <h1><strong>Login</strong></h1><br></br>
               
        <div className="formLoginComponent"><FormLogin /></div>   
        </div>
                
        
    ) 

}

export default Login