//import de componentes react-boostrap
import Container from "react-bootstrap/esm/Container"
import FormLogin from "../../components/FormLogin"

//import do arquivo css
import './login.css'


function Login() {
    return (
        <Container md={{span:6, offset: 3 }}>
            <h1>Login</h1>
            <div className="formLoginComponent"><FormLogin /></div>  
            
        </Container>
    )
}

export default Login