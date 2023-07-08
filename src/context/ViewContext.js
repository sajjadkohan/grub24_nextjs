"use client"
import { createContext, useState } from "react";

export const ViewContext = createContext();
export const ViewWrapper = ({children}) => {

    const [loginModal, setLoginModal] = useState(false)
    
    return (
        <ViewContext.Provider value={{
            loginModal, setLoginModal
        }}>
            {children}
        </ViewContext.Provider>
    )
}