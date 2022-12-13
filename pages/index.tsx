import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'
import LiftingForm from './components/lifting-form'
import { STONE_WEIGHTS } from './data'
import {
    handleTotal,
    handleE1RM
} from './functions'
import { getLiftsCSV } from './data'


export default function Home() {
    const loggedIn: boolean = true;

    const [dttLifts, setDttLifts] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('dttLifts'));
        if (items) {
            setDttLifts(items);
        }
    }, []);

    let maxFront: number = 0;
    let maxBack: number = 0
    for( const lift of dttLifts ) {
        maxFront = (parseInt(lift.front) > maxFront) ? lift.front : maxFront 
        maxBack = (parseInt(lift.back) > maxBack) ? lift.back : maxBack 
    }

    // Handles the submit event on form submit.
    const handleSubmit = async (event: object) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data: object = {
            date: event.target.date.value,
            front: event.target.front.value,
            back: event.target.back.value,
            reps: event.target.reps.value,
            location: event.target.location.value
        }

        setDttLifts([ data, ...dttLifts ]);

        localStorage.setItem('dttLifts', JSON.stringify(dttLifts));

        

        // Send the data to the server in JSON format.
        // const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        // const endpoint = '/api/form'

        // // Form the request for sending data to the server.
        // const options = {
        //     // The method is POST because we are sending data.
        //     method: 'POST',
        //     // Tell the server we're sending JSON.
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     // Body of the request is the JSON data we created above.
        //     body: JSONdata,
        // }

        // // Send the form data to our forms API on Vercel and get a response.
        // const response = await fetch(endpoint, options)

        // // Get the response data from server as JSON.
        // // If server returns the name submitted, that means the form works.
        // const result = await response.json()
        // console.log(result.data)
    }

    const handleDownload = () => {
        getLiftsCSV(dttLifts)
    }

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
                                {STONE_WEIGHTS.map((weight, index) => 
                                    <tr key={index}>
                                        <td className={`${maxFront >= parseInt(weight.front) ? styles.weightFill : ''}`}>{weight.front}</td>
                                        <td className={`${maxBack >= parseInt(weight.back) ? styles.weightFill : ''}`}>{weight.back}</td>
                                        <td>{weight.total}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div id="lifts-grid">
                        <p>Record in pounds (lbs) or kilograms (kg)</p>
                        <div>
                            <LiftingForm handleSubmit={handleSubmit}/>
                        </div>
                        <div>
                            <button onClick={handleDownload}>Download</button>
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
                                        {dttLifts.map((lift, index) => 
                                            <tr key={index}>
                                                <td>{lift.date}</td>
                                                <td>{lift.front}</td>
                                                <td>{lift.back}</td>
                                                <td>{handleTotal(lift.front, lift.back)}</td>
                                                <td>{lift.reps}</td>
                                                <td>{handleE1RM(lift.front, lift.back, lift.reps)}</td>
                                                <td>{lift.location}</td>
                                            </tr>
                                        )}
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
