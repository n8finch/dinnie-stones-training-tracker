import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'



export default function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Terms of Service | 🪨 Dinnie Training Tracker</title>
                <meta name="description" content="Terms of Service | 🪨 Dinnie Training Tracker" />
                <link rel="icon" href="/stone.svg" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>🪨 Terms of Service</h1>
                <p className={styles.description}>Coming soon...</p>
            </main>

            <Footer />
        </div>
    )
}
