import { createContext, useState } from "react";
import img1 from './assets/Default_pfp.svg.png'

export const AvatarInfo = createContext();

export const Context = ({children}) => {
    const [photo, setPhoto] = useState(<img src={img1} alt="" />);
    const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [role, setRole] = useState("Senior Loan Officer");

    return(
        <AvatarInfo.Provider value={{photo, setPhoto, firstName, setFirstName, lastName, setLastName, role, setRole}}>{children}</AvatarInfo.Provider>
    )
}