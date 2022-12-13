import styles from '../../styles/Home.module.css'

export default function LiftingForm({handleSubmit}) {
    return (
        // We pass the event to the handleSubmit() function on submit.
        <form className={styles.liftForm} onSubmit={handleSubmit}>
            <input className={styles.liftDate} type="date" id="lift-date" name="date" placeholder='Date' required />
            <input type="number" id="lift-front" name="front" min="0" placeholder="Front" required />
            <input type="number" id="lift-back" name="back" min="0" placeholder="Back" required />
            <input type="number" id="lift-reps" name="reps" min="0" placeholder="Reps" required />
            {/* <input type="number" id="lift-e1rm" name="e1rm" min="0" readOnly placeholder="E1RM" /> */}
            <select id="lift-type" name="type" required>
                <option value="lift">Lift</option>
                <option value="carry">Carry</option>
            </select>
            <input type="text" id="lift-location" name="location" placeholder="Location" required />
            <button type="submit">Add Lift</button>
        </form>
    )
}