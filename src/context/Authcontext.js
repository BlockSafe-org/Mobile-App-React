import { createContext, useState } from "react";
import FirebaseAuth from "../services/Authentication";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    const checkUser = () => {
        setIsLoading(true)
        let user = FirebaseAuth.getUser();
        setUser(user);
        setIsLoading(false)
    }

    const checkVerified = () => {
        setIsLoading(true)
        let user = FirebaseAuth.getUser();
        if (user != null) {
            return user.emailVerified
        }

        console.log("No user signed in!")
    }


    return (
        <AuthContext.Provider value={{checkUser, checkVerified, isLoading, user}}>
            {children}
        </AuthContext.Provider>
    )
}