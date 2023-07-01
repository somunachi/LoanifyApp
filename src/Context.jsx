import { createContext, useState } from "react";

export const AvatarInfo = createContext();

export const Context = ({children}) => {
  const [photo, setPhoto] = useState();
    const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [status, setStatus] = useState("Active");
  const [role, setRole] = useState("Senior Loan Officer");
  

    return(
        <AvatarInfo.Provider value={{photo, setPhoto, firstName, setFirstName, lastName, setLastName, role, setRole, status, setStatus}}>{children}</AvatarInfo.Provider>
    )
}