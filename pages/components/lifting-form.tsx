import styles from '../../styles/Home.module.css'

export default function LiftingForm() {

    // Handles the submit event on form submit.
    const handleSubmit = async (event: object) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            date: event.target.date.value,
            front: event.target.front.value,
            back: event.target.back.value,
            reps: event.target.reps.value,
            location: event.target.location.value
        }

        let dttLifts: object = JSON.parse(localStorage.getItem('dttLifts')) || [];

        dttLifts = [ data, ...dttLifts ];

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
    return (
        // We pass the event to the handleSubmit() function on submit.
        <form className={styles.liftForm} onSubmit={handleSubmit}>
            <input className={styles.liftDate} type="date" id="lift-date" name="date" placeholder='Date' required />
            <input type="number" id="lift-front" name="front" min="0" placeholder="Front" required />
            <input type="number" id="lift-back" name="back" min="0" placeholder="Back" required />
            {/* <input type="number" id="lift-total" name="total" min="0" readOnly placeholder="Total" /> */}
            <input type="number" id="lift-reps" name="reps" min="0" placeholder="Reps" required />
            {/* <input type="number" id="lift-e1rm" name="e1rm" min="0" readOnly placeholder="E1RM" /> */}
            <input type="text" id="lift-location" name="location" placeholder="Location" required />
            <button type="submit">Add Lift</button>
        </form>
    )
}