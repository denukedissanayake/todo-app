import { createContext, useContext, useEffect, useState } from "react";

/* 
    Auth context provider
*/
const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        if (typeof window !== 'undefined') { 
            const authUserData = localStorage.getItem('user');
            return authUserData ? JSON.parse(authUserData) : undefined
        }
    }); 

    /* 
        Save the user token to local storage when token is changed
    */
    useEffect(() => {
        user && localStorage.setItem('user' , JSON.stringify(user))
    }, [user])


    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

/* 
    Custom hook to set and get token from context
*/
export const useAuth = () => {
    return useContext(AuthContext);
}