import { useLocation, useParams} from 'react-router-dom'


function Profile() {

    const params = useParams();
    const location = useLocation();

    
    console.log('params', params, location);

    return (
            <div> testando aqui</div>
        
    )
}

export default Profile;