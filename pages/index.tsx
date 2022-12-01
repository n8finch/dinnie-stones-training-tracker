import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'
import { handleDate } from './functions'
import LiftingForm from './components/lifting-form'


export default function Home() {

    const loggedIn: boolean = true;

    return (
        <div className={styles.container}>
            <Head>
                <title>🪨 Dinnie Training Tracker</title>
                <meta name="description" content="🪨 Dinnie Training Tracker" />
                <link rel="icon" href="/stone.svg" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>🪨 Dinnie Training Tracker</h1>
                <p className={styles.description}>Log in to store your lifts...</p>

                <div className={styles.grid}>
                    <div id="weigths-grid">
                        Training Weights:
                        <table>
                            <thead>
                                <tr>
                                    <td>Front</td>
                                    <td>Back</td>
                                    <td>Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>415</td>
                                    <td>319</td>
                                    <td>734</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="lifts-grid">
                        <p>Record in pounds (lbs) or kilograms (kg)</p>
                        <div>
                            <LiftingForm/>
                        </div>

                        <div>
                            Previous Lifts:
                            <table>
                                <thead>
                                    <tr>
                                        <td>Date</td>
                                        <td>Front</td>
                                        <td>Back</td>
                                        <td>Total</td>
                                        <td>Reps</td>
                                        <td>E1RM</td>
                                        <td>Location</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>11/11/11</td>
                                        <td>321</td>
                                        <td>221</td>
                                        <td>542</td>
                                        <td>3</td>
                                        <td>734</td>
                                        <td>Gym</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
