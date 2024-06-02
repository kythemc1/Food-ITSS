import React, { createContext, useEffect, useState } from 'react';
// import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';


export const AuthContext = createContext();
const googleProvider = 1
// const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signupUser = (email, password) => {
        setLoading(true);
        return 1
    }
    const loginUser = (email, password) => {
        setLoading(true);
       return 1
    }
    const googleSignIn = () => {
        setLoading(true)
        return 1
    }

    const updateUserProfile = (profile) => {
        setLoading(true)
        return 1
    }
    const signOutUser = () => {
        return 1
    }

    useEffect(()=>{

    },[])





    const authInfo = {
        user,
        signupUser,
        loginUser,
        googleSignIn,
        updateUserProfile,
        signOutUser,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
