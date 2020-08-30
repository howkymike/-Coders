import React, { useState } from 'react';

export const UserContext = React.createContext();

export const MessageContext = React.createContext();

export default ({children}) => {
    
    let [user, setUser] = useState({ logged: false });
    let [messages, setMessages] = useState([]);

    const login = async (login, password) => {
        try {
            let res = await fetch("http://127.0.0.1:5001/api/userinfos/login",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: login,
                    password: password,
                    ttl: 60 * 60 * 24 * 7 * 2
                })
            });
            
            
    
            if(res.status !== 200) 
                throw new Error("Cant login");
            let json = await res.json();

            console.log(json.id);
            let res2 = await fetch(`http://127.0.0.1:5001/api/userinfos/${json.userId}?access_token=${json.id}`)
                    
           
            let json2 = await res2.json();
            setUser({
                ...json2,
                token: json.id,
                logged: true
            });
            return true;
        } catch(e) {
            return Promise.reject(new Error(400));
        }
    }

    const updateInfo = async () => {
        setTimeout( async () => {
            if(user.logged) {
                try {
                    let res = await fetch("http://127.0.0.1:5001/api/userinfos/" + user.id)
                    let json = await res.json();
        
                    setUser({
                        ...user,
                        ...json,
                        logged: true
                    });
                } catch(e) {
                    console.log(e);
                }
                
            }
            return true;
        }, 100);  
    }

    const register = async (login, password, password2) => {
        try {
            if(password2 !== password) 
                throw new Error("Diffrent passwords");

            let res = await fetch("http://127.0.0.1:5001/api/userinfos", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: login,
                    password: password,
                })
            });
    
            if(res.status !== 200) 
                throw new Error("Cant register");
            
            Promise.resolve(true);
        } catch(e) {
            throw e;
        }
    }

    const msg = (type, text) => {
        setMessages([
            ...messages,
            { type, text }
        ]);
    }

    const del = (index) => {
        setMessages(messages.filter((val, key) => key !== index));
    }

    return (
      <UserContext.Provider value={{user, login, register, updateInfo}}>
          <MessageContext.Provider value={{ messages, msg, del }}>
            {children}
          </MessageContext.Provider>
      </UserContext.Provider>
    );
}