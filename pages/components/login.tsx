// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from './StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
// Import the useAuthStateHook
import { useAuthState } from "react-firebase-hooks/auth";

import clientCredentials from '../../firebase/clientApp';


export default function Login() {
    // Init firebase app.
    firebase.initializeApp(clientCredentials);

    // Configure FirebaseUI.
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        // signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
    };

    // Destructure user, loading, and error out of the hook.  
    const [user, loading, error] = useAuthState(firebase.auth());
    // console.log the current user and loading status
    console.log("Loading:", loading, "|", "Current user:", user);


    return (
        <div className="Login">
            {user && (
                <h2>Hi {user?.displayName}</h2>
            )}
            {!user && (
                <div>
                    Please sign in:
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>
            )}
        </div>
    )
}
