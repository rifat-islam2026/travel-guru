import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in user 
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // onAuth state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    },[])
    // sign Out 
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut
    }
  return (
      <AuthContext.Provider value={authInfo}>
          {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider
