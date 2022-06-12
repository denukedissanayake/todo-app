import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        if (typeof window !== 'undefined') { 
            const authUserData = localStorage.getItem('user');
            return authUserData ? JSON.parse(authUserData) : undefined
        }
    }); 

    useEffect(() => {
        user && localStorage.setItem('user' , JSON.stringify(user))
    }, [user])


    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}