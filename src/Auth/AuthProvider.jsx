import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase-config";
  export const AuthContext=createContext(null)
  const googleProvider= new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

     
   const googleLogin=()=>{
      return signInWithPopup(auth,googleProvider)
   }
   

    const autInfo={
        user,
        googleLogin
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
