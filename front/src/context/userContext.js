import React, { useState } from 'react';

export const UserContext = React.createContext();

export default ({children}) => {
    
    let [user, setUser] = useState({ logged: false });

    const login = (login, password) => {
        // zapytanie do api
        console.log("KARWASZ");
        setUser({
            logged: true,
            id: "33",
            name: "Meqeq"
        });
    }

    return (
      <UserContext.Provider value={{user, login}}>
          {children}
      </UserContext.Provider>
    );
}