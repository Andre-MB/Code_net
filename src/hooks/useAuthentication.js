import { db } from "../firebase/config";

import {
    getAuth,
    sendEmailVerification,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signInWithRedirect
} from "firebase/auth";

import { GoogleLogin } from '@react-oauth/google';


import { useState, useEffect } from "react";

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const [user, setUser] = useState({});

    // cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfisCancelled() {
        if (cancelled) {
            return;
        }
    }

    // Register
    const createUser = async (data) => {
        checkIfisCancelled();

        setLoading(true);
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, {
                displayName: data.displayName
            })

            // const userC = userCredential.user;

            sendEmailVerification(auth.currentUser);

            setLoading(false)

            return user

        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage;

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracters."
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }

            setLoading(false)
            setError(systemErrorMessage)
        }


    };

    // Logout - Sing out
    const logout = () => {
        checkIfisCancelled();
        signOut(auth)
    }

    // Login - sing in
    const login = async (data) => {
        checkIfisCancelled()

        setLoading()
        setError()

        try {
            const signIn = await signInWithEmailAndPassword(auth, data.email, data.password)

            if (signIn.user.emailVerified) {
                location.href = "/home";
            } else {
                setLoading(false)
            }

        } catch (error) {
            let systemErrorMessage;

            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontadp"
            } else if (error.message.includes("wrong-password")) {
                systemErrorMessage = "Senha incorreta"
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde."
            }

            setError(systemErrorMessage)
            setLoading(false)
        }
    }

    // Login Google - sing in
    const loginGoogle = async () => {
        checkIfisCancelled();

        setLoading()
        setError()


        // signInWithPopup(auth, provider)
        //     .then((result) => {
        //         setUser(result.user);
        //     })
        // .catch((error) => {
        //     console.log(error);
        // });

        try {
            const provider = new GoogleAuthProvider();

            await signInWithPopup(auth, provider)
                .then(result => setUser(result.user))
                .catch((error) => {
                    console.log(error);
                });

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, []);

    return { auth, createUser, error, loading, logout, login, loginGoogle }

};
