import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'

import { Amplify, Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import awsConfig from '../src/aws-exports'

Amplify.configure(awsConfig);

export default function PrivacyPolicy() {
    const [user, setUser] = useState(null);
    const [customState, setCustomState] = useState(null);
  
    useEffect(() => {
      const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
        switch (event) {
          case "signIn":
            setUser(data);
            break;
          case "signOut":
            setUser(null);
            break;
          case "customOAuthState":
            setCustomState(data);
        }
      });
  
      Auth.currentAuthenticatedUser()
        .then(currentUser => setUser(currentUser))
        .catch(() => console.log("Not signed in"));
  
      return unsubscribe;
    }, []);


    return (
        <div className={styles.container}>
            <Head>
                <title>Login | 🪨 Dinnie Training Tracker</title>
                <meta name="description" content="Login | 🪨 Dinnie Training Tracker" />
                <link rel="icon" href="/stone.svg" />
            </Head>

            <div className="Login">
                <button onClick={() => Auth.federatedSignIn()}>Open Hosted UI</button>
                <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })}>Open Google</button>
                <button onClick={() => Auth.signOut()}>Sign Out</button>
                <div>Hello {user && user.getUsername()}</div>
            </div>
            <Footer />
        </div>
    )
}
