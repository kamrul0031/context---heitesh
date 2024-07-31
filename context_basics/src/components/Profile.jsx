import {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return(<div>login please</div>)
        return(<div>
            <h1>Welcome {user.username} </h1>
            <p>your password is : {user.password}</p>
        </div>)
}

export default Profile