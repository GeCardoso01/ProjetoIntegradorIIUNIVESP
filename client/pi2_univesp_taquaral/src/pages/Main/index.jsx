import { Link } from 'react-router-dom'

//imports Bootstraps
import Container  from 'react-bootstrap/Container'

//import CSS
import "../../App.css"



function Main() {
    return (
        <Container>        
            <Link class="link" to="/"> <h1> Página inicial </h1></Link> 
  
            <ul>
                <li>
                    <Link to="/form"> Registre-se </Link> 
                </li>
                <li>
                    <Link to="/login"> Login </Link> 
                </li>
            </ul>
            
        </Container>

    )
}

export default Main