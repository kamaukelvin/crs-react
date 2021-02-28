import routes from 'routes'
import {useHistory} from 'react-router-dom'
const Login = () => {

    const history = useHistory()
    return (
        <div>
           Login page here
           <button onClick={()=>history.push(routes.dashboard)}>Login</button> 
        </div>
    )
}

export default Login
