//import do componente Profile
import Profile from "../../components/Profile"

//react-router
import { Link } from 'react-router-dom'


function paginaProfile() {


    return (

        <div>
        <header>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/cadastro">Cadastro/Login</Link></li>
            </ul>
        </nav>
    </header>


        <Profile />
        
        </div>
    )
}


export default paginaProfile;