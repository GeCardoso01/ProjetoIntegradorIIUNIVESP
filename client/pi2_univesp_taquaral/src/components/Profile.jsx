import { useLocation } from 'react-router-dom'
import Axios from 'axios'




function Profile() {


    const location = useLocation();

    
    console.log('location', location.state.email);

    const enviarDadosLogin = () => {
        Axios.post("http://localhost:3001/profile", {
            email: location.state.email
        }).then(response => console.log(response))
    }
    

    
    return (

        <button onClick={ () => enviarDadosLogin()}>AQUI</button>


    )

}

export default Profile;