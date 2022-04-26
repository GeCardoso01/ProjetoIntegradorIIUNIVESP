import { useState, useEffect} from "react"
import Axios from "axios"

function Login() {

    const [listRegistros, setRegistros] = useState()
    console.log(listRegistros)

    return (
    useEffect(() => {
        Axios.get("http://localhost:3001/getLogin")
        .then((response) => {
            setRegistros(response.data)
        })
       }, []
        )
    )
}


export default Login