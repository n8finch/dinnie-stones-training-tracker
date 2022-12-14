export const handleTotal = (front: string, back: string) : number => {
    return parseInt(front) + parseInt(back);
}

export const handleE1RM = (front: string, back: string, reps: string) : number => {
    // (.0333 x Weight x Reps) + Weight = Estimated 1RM
    const total: number = parseInt(front) + parseInt(back)
    return Math.floor( ( .0333 * total * parseInt(reps) ) + total )
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