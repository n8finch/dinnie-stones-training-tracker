// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

import clientCredentials from '../firebase/clientApp';

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'

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


export default function Login() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Login | 🪨 Dinnie Training Tracker</title>
                <meta name="description" content="Login | 🪨 Dinnie Training Tracker" />
                <link rel="icon" href="/stone.svg" />
            </Head>

            <div className="Login">
                Please sign in:
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
            <Footer />
        </div>
    )
}
