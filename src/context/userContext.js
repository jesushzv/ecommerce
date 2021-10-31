import React,{createContext,useContext, useState} from "react";

const userContext = createContext();
export const useUserContext = () => useContext(userContext);



export const userProvider = ({children}) => {

    [user,setUser] = useState(null);


    return(
        <userContext.Provider value={}>
            {children}
        </userContext.Provider>
    
    )
}