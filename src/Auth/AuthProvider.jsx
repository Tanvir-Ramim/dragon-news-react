import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase-config";
  export const AuthContext=createContext(null)
  const googleProvider= new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

     
   const googleLogin=()=>{
      return signInWithPopup(auth,googleProvider)
   }
   
   const createUser=(email,password)=>{
         return createUserWithEmailAndPassword(auth,email,password)
   }

   const loginUser=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
   }

     const logOut=()=>{
          return  signOut(auth)
     }

     useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser)
            setUser(currentUser)
        })
  return()=>{
    unSubscribe()
  }
 },[])
 
    const autInfo={
        user,
        googleLogin,
        createUser,
        loginUser,
        logOut
    }
     
     
    
    return (
        <AuthContext.Provider value={autInfo}>
              {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
   children:PropTypes.node
}

export default AuthProvider;
