import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import Axios from 'axios'


function Profile() {


    const location = useLocation();
    //util para verificar a chegada dos dados
    // console.log('location', location.state.email);

    //capitação dos valores do formulário
    const [values, setState] = useState('')

    //função utilizada para enviar dados do login e receber informações do banco de dados
    useEffect(() => {
            Axios.post("http://localhost:3001/profile", {
                email: location.state.email
            }).then(
                response => setState(response.data[0])
            )
        }, []);

    //função criadora do elemento html
    const Dados = () => { 
        
        const CNPJ = values.idCNPJ;
        const email = values.idEmail;
        const nomeDoResponsavel = values.idNomeDoResponsavel;
        const razaoSocial = values.idRazaoSocial;
        const senha = values.idSenha;
        
        const userInformation = [
            email, CNPJ, nomeDoResponsavel, razaoSocial, senha
        ]


        function setValues(value, i=0) {
            const createElement = React.createElement('li', {key:i}, value)
            i++
                return createElement
        };


         
   
        return userInformation.map(setValues)

        
    }

    
    return (


        <div>ds</div>, Dados()
        



    )

}

export default Profile;