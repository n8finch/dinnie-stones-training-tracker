// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from './components/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import firebaseApp from '../firebase/clientApp';
import { getAuth } from "firebase/auth";
const auth = getAuth(firebaseApp);
import { useAuthState } from "react-firebase-hooks/auth";


// Configure FirebaseUI.
const uiConfig = {
    // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/auth",
    // GitHub as the only included Auth Provider.
    // You could add and configure more here!
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
};

function SignInScreen() {
    const [user, loading, error] = useAuthState(auth);
    // console.log the current user and loading status
    console.log("Loading:", loading, "|", "Current user:", user);

    return (
        <div>
            <h1>Pineapple Login</h1>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
    );
}

export default SignInScreen;