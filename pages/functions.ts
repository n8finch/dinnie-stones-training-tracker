export const handleTotal = (front: number, back: number) : number => {
    return front + back
}

export const handleE1RM = (front: number, back: number, reps: number) : number => {
    // (.0333 x Weight x Reps) + Weight = Estimated 1RM
    const total = front + back
    return ( .0333 * total * reps ) + total
}

export const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export const clearLiftingForm = () => {
    Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
    );
    const liftSelector = <HTMLInputElement>document.getElementById("lift-type")

    if( null !== liftSelector ) {
        liftSelector.value = 'lift';
    }
}