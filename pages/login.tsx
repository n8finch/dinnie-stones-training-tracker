import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'


export default function Login() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Login | 🪨 Dinnie Training Tracker</title>
                <meta name="description" content="Login | 🪨 Dinnie Training Tracker" />
                <link rel="icon" href="/stone.svg" />
            </Head>

            <div className="Login">
                Hi!
            </div>
            <Footer />
        </div>
    )
}
