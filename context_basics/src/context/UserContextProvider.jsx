import { useState  } from "react"

import UserContext from './UserContext';
import AdminContext from "./AdminContext";
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(null);
    return(
        <div>
             <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
        <AdminContext value = {{admin,setAdmin}}>
            {children}
        </AdminContext>
        </div>
       
    )
}
export default UserContextProvider