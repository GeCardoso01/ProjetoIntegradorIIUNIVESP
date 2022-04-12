import { useState } from "react";
import ReactDOM from 'react-dom';

//imports Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Formulario() {

  return (

    <Container> 

    <h1>Cadastre sua empresa para ser um ponto de coleta de 
        recicláveis eletrônicos!
    </h1>

        <Row>
            <Col md={{span:6, offset: 3 }}>

                <Form>
                <Form.Group className="mb-3" controlId="formBasicInformation">
                <Form.Label>Nome completo</Form.Label>
                <Form.Control type="text" 
                placeholder="Informe seu nome completo" />

                <Form.Label>Razão Social</Form.Label>
                <Form.Control type="text" 
                placeholder="Informe a Razão social de sua empresa" />
                
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Insira seu endereço de e-mail" />



                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha de Acesso ao portal" />
                </Form.Group>


                <Form.Text className="text-muted">
                    Você concorda com a disponibilização dos dados de sua empresa para
                    que as pessoas possam encontra-la e realizar a entrega dos recicláveis.
                </Form.Text>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Concordo" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                Enviar
                </Button>
            </Form>
        </Col>
    </Row>
    
  </Container>
  )
}

export default Formulario