import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../src/aws-exports'
Amplify.configure(awsExports);


export default function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Login | 🪨 Dinnie Training Tracker</title>
                <meta name="description" content="Login | 🪨 Dinnie Training Tracker" />
                <link rel="icon" href="/stone.svg" />
            </Head>

            <Authenticator socialProviders={['google']}>
                {({ signOut, user }) => (
                    <main>
                        <h1>Hello {user?.username}</h1>
                        <button onClick={signOut}>Sign out</button>
                    </main>
                )}
            </Authenticator>
            <Footer />
        </div>
    )
}
