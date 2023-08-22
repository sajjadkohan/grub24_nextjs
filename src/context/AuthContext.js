'use client'

import { fetchData, getDeviceId } from "../../utils/functions";

const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext();
export const AuthWrapper = ({children}) => {
    const [user, setUser] = useState(null);


    useEffect(async () => {
      const formData = new FormData();
      formData.append('deviceId',getDeviceId())
      const x = await fetchData("http://grub24.com/NextApi/IsLogin?debug=2","POST",formData);
      
      if(x.success){
        setUser(x.data)
      }
    }, [])
    
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}