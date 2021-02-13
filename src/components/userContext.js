import React, { useState, useEffect, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) =>{
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`)
            .then(res => res.json())
            .then(data => {
              setUsers(data)
            })
            .catch(err => console.log(err))
        });
    return(
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}