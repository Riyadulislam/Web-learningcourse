import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';




 export const authContext=createContext();
    const auth=getAuth(app);
const Authprovider = ({children}) => {
    const [user,setUser]=useState(null) 
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    const googleProviderLogin=(provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const singinlogin=(email,password)=>{
        setLoading(true)
     
        return signInWithEmailAndPassword(auth,email,password)
      
    }
    const logout=()=>{
        
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentuser) =>{
              console.log('inside state',currentuser)
              setUser(currentuser)
             
          })
          return ()=> { unsubscribe();
          }
              
     },[])

    const authInfo={user,createUser,googleProviderLogin,logout,singinlogin,loading}
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default Authprovider;