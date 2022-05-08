//import dos componentes do react utilizados
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

//import de funções Hook
import { useState } from "react"

function FormLogin() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("enviado", {email, password})
    }

    //função Handle do envio para transmitir informações ao servidor
    const handleClickButton = () => {
        
    }

    return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>E-mail</Form.Label>
    <Form.Control type="email" placeholder="Preencha seu e-mail" 
    value={email} onChange={(e) => setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
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