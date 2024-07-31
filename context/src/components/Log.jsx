import {useState,useContext} from 'react'
import UserContext from "../context/UserContext";
import AdminContext from '../context/AdminContext';

function Log() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext)

    const [adminname, setAdminname] = useState('');
    const [apass, setApass] = useState('');
    const {setAdmin} = useContext(AdminContext);

    const userHandleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password})
        {//problem section
        // setUser({username,password})
        //i can pass the value using an empty array like : setUser({username,password} then i can use it as array at another page like : {user.usename} / {user.password}
        //setUser(username,password)
        //with array i can pass the value and use the username at another page like : {user} , Q: but how can i the password value in this case , where this value is stored ??
        }
    }
    const adminHandler = (e) => {
        e.preventDefault();
        setAdmin({adminname,apass})
    }
  return (
    <div>
        <div>
            <input type="text" 
        value={username}
        onChange={(e)=>{setAdminname(e.target.value)}}
        placeholder="username"
        />
        <input type="text" 
        value={password}
        onChange={(e)=>{setApass(e.target.value)}}
        placeholder="password"
        />
        <button
        onClick={userHandleSubmit}
        >submit</button>
        </div>
        
        <hr />

        <div>
            <input type="text" 
        value={adminname}
        onChange={(e)=>{setUsername(e.target.value)}}
        placeholder="username"
        />
        <input type="text" 
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        placeholder="password"
        />
       <button
       onClick={adminHandler}
       >add admin</button>
        </div>

    </div>
  )
}

export default Log