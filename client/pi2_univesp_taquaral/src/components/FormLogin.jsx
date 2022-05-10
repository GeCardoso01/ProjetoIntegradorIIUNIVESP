//import de dependencias 
import { useState } from "react"
import Axios from "axios"

//imports Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function FormLogin() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("enviado", {email, password})
    }

    //função Handle do envio para transmitir informações ao servidor
    const handleClickButton = () => {
        Axios.post("http://localhost:3001/login", {
            email: email.formEmail,
            password: password.formPassword
        }).then(response => {
            console.log(response)
        })
    }

    return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formEmail">
    <Form.Label>E-mail</Form.Label>
    <Form.Control type="email" placeholder="Preencha seu e-mail" 
    value={email} onChange={(e) => setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formPassword">
    <Form.Label>Senha</Form.Label>
    <Form.Control type="password" placeholder="Informe sua senha" 
    value={password} onChange={(e) => setPassword(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Me manter conectado" />
    </Form.Group>
    <Button variant="primary" type="submit" 
    onClick={() => handleClickButton()} >
    Login
    </Button>
    </Form>
    )
}

export default FormLogin