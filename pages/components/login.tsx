// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from './StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

// Import the useAuthStateHook
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import clientCredentials from '../../firebase/clientApp';

export default function Login() {
    // Init firebase app.
    const firebaseApp = firebase.initializeApp(clientCredentials);

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

    const auth = getAuth(firebaseApp);
    // Destructure user, loading, and error out of the hook.  
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <div className="Login">
            {user && (
                <>
                    <h2>Hi {user?.displayName}</h2>
                    <button onClick={logout}>Sign out</button>
                </>
            )}
            {!user && (
                <>
                    Please sign in:
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </>
            )}
        </div>
    )
}
