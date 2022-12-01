import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recommended Programs | 🪨 Dinnie Training Tracker</title>
        <meta name="description" content="Recommended Programs | 🪨 Dinnie Training Tracker" />
        <link rel="icon" href="/stone.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>🪨 Recommended Programs</h1>
        <p className={styles.description}>Here are some programs to check out if you want to lift the Dinnie Stones.</p>
      </main>

      <Footer/>
    </div>
  )
}
