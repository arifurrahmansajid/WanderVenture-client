import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

// import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";
import axios from "axios";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInMethod = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                toast.success('log Out success full');
            })
            .catch((error) => {
                toast.error(error);
            });

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail }

            setUser(currentUser);
            console.log(currentUser);
            setLoading(false)

            if (currentUser) {
                axios.post(`${import.meta.env.VITE_API_LINK}/jwt`, loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }else{
                axios.post(`${import.meta.env.VITE_API_LINK}/logOut`, loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log(res.data);
                })
            }
        })
        return () => {
            unsubscribe()
        }
    }, [user?.email])

    const authInfo = {
        user,
        loading,
        createUser,
        signInMethod,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;