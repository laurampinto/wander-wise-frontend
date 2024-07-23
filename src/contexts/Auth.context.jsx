import { createContext } from "react";

const AuthContext = createContext();

const AuthWrapper = ({children}) => {
    return(
        <AuthContext.Provider value={{name: "Laura"}}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthContext, AuthWrapper};