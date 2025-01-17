import React from "react";
import UserContext from "./usercontext";

const Usercontextprovider = ({children})=>{

    const [user, setUser] = React.useState(null);
    return(
        <UserContext.Provider value={{user, setUser}}>
      {children}
        </UserContext.Provider>
    )

}

export default Usercontextprovider;