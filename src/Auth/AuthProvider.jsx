import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase-config";
  export const AuthContext=createContext(null)
  const googleProvider= new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
   const [loader,setLoader]=useState(true)
     
   const googleLogin=()=>{
      setLoader(true)
      return signInWithPopup(auth,googleProvider)
   }
   
   const createUser=(email,password)=>{
    setLoader(true)
         return createUserWithEmailAndPassword(auth,email,password)
   }

   const loginUser=(email,password)=>{
    setLoader(true)

      return signInWithEmailAndPassword(auth,email,password)
   }

     const logOut=()=>{
    setLoader(true)
          return  signOut(auth)
     }

     useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoader(false)
            console.log('onAuth', currentUser)
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
        logOut,
        loader
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
