import { useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider({ children })  {
    
    const [user, setUser] = useState(() => {
        const userData = localStorage.getItem("user");
        return userData ? JSON.parse(userData) : null
    });

    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;