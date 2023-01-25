
import { createContext, useState } from "react";

export const UserContext = createContext({'username':"", 'id':0}); // Define context

function UserProvider({ children }) { // define provider
    const [user, setUser] = useState({'username':"", 'id':0}); // Define translateReport object and update function
    return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>; // define provider with context making report accessible to children
}

export default UserProvider; // export provider, providing context translatereport
