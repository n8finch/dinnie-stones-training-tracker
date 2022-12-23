import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'
import LiftingForm from './components/lifting-form'
import { STONE_WEIGHTS } from '../helpers/data'
import {
    handleTotal,
    handleE1RM,
    capitalize,
    clearLiftingForm,
} from '../helpers/functions'
import { getLiftsCSV } from '../helpers/data'

import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports'
Amplify.configure(awsExports);


interface Lift {
    date: string;
    front: string;
    back: string;
    reps: string;
    type: string;
    location: string;
}

export default function Home() {
    const loggedIn: boolean = true;

    const [dttLifts, setDttLifts] = useState<object[]>([]);

    useEffect(() => {
        const ls: string | null = localStorage.getItem('dttLifts') || null;
        if ( ls ) {
            const items = JSON.parse(ls);
            if (items) {
                setDttLifts(items);
            }
        }
    }, []);

    let maxLiftFront: number = 0;
    let maxLiftBack: number = 0;
    let maxCarryFront: number = 0;
    let maxCarryBack: number = 0;

    for( let lift of dttLifts as Lift[]) {
        if('carry' === lift.type) {
            maxCarryFront = (parseInt(lift.front) > maxCarryFront) ? parseInt(lift.front) : maxCarryFront ;
            maxCarryBack = (parseInt(lift.back) > maxCarryBack) ? parseInt(lift.back) : maxCarryBack;
        }

        if('lift' === lift.type) {
            maxLiftFront = (parseInt(lift.front) > maxLiftFront) ? parseInt(lift.front) : maxLiftFront ;
            maxLiftBack = (parseInt(lift.back) > maxLiftBack) ? parseInt(lift.back) : maxLiftBack;
        }
    }

    // Handles the submit event on form submit.
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data: object = {
            date: event.currentTarget.date.value || '',
            front: event.currentTarget.front.value || '',
            back: event.currentTarget.back.value || '',
            reps: event.currentTarget.reps.value || '',
            type: event.currentTarget.type.value || '',
            location: event.currentTarget.location.value || '',
        }

        localStorage.setItem('dttLifts', JSON.stringify([ data, ...dttLifts ]));

        setDttLifts([ data, ...dttLifts ]);

        clearLiftingForm();


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

    const getWeightFillClass = (weight: number, side:string ) : string => {
        let className = 'noFill';
        if( maxLiftFront >= weight && 'front' === side ) {
            className = 'liftFill'
        }
        if( maxLiftBack >= weight && 'back' === side ) {
            className = 'liftFill'
        }
        // Override if necessary.
        if( maxCarryFront >= weight&& 'front' === side ) {
            className = 'carryFill'
        }
        if( maxCarryBack >= weight && 'back' === side ) {
            className = 'carryFill'
        }


        return className;
    }

    const handleDeleteLift = (e: React.FormEvent<HTMLFormElement>) => {
        const remove = e.target as HTMLInputElement

        const remainingLifts = dttLifts.filter( (lift, index) => {
                return parseInt(remove.value) !== index
            }
        )
        localStorage.setItem('dttLifts', JSON.stringify([ ...remainingLifts ]));

        setDttLifts( remainingLifts );
    }

    const handleDownload = () => {
        getLiftsCSV(dttLifts)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>🪨 Dinnie Stone Training Tracker</title>
                <meta name="description" content="🪨 Dinnie Training Tracker" />
                <link rel="icon" href="/stone.svg" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>🪨 Dinnie Stone 🪨<br/><small>Training Tracker</small></h1>
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
                                        <td className={`${styles[getWeightFillClass(weight.front, 'front')]}`}>{weight.front}</td>
                                        <td className={`${styles[getWeightFillClass(weight.back, 'back')]}`}>{weight.back}</td>
                                        <td>{weight.total}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div id="lifts-grid" className={styles.liftsGrid}>
                        <p>Record in pounds (lbs) or kilograms (kg)</p>
                        <div>
                            <button onClick={handleDownload}>Download all lifts.</button>
                        </div>
                        <div>
                            <LiftingForm handleSubmit={handleSubmit}/>
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
                                        <td>Type</td>
                                        <td>Location</td>
                                    </tr>
                                </thead>
                                <tbody>
                                        {dttLifts.map((lift:any , index) => 
                                            <tr key={index}>
                                                <td>{lift.date}</td>
                                                <td>{lift.front}</td>
                                                <td>{lift.back}</td>
                                                <td>{handleTotal(lift.front, lift.back)}</td>
                                                <td>{lift.reps}</td>
                                                <td>{handleE1RM(lift.front, lift.back, lift.reps)}</td>
                                                <td>{capitalize(lift.type)}</td>
                                                <td>{lift.location}</td>
                                                <td>
                                                    <button value={index} onClick={() =>handleDeleteLift}>🚽</button>
                                                </td>
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
