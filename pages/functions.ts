export const handleDate = (date) => {
    console.log('handleDate: ', date )
}
export const handleFront = (front) => {
    console.log('handleFront: ', front )
}
export const handleBack = (back) => {
    console.log('handleBack: ', back )
}
export const handleTotal = (front: number, back: number) : number => {
    return parseInt(front) + parseInt(back)
}
export const handleReps = (reps) => {
    console.log('handleReps: ', reps )
}
export const handleE1RM = (front: number, back: number, reps: number) : number => {
    // (.0333 x Weight x Reps) + Weight = Estimated 1RM
    const total = parseInt(front) + parseInt(back)
    return parseInt( ( .0333 * total * reps ) + total )
}
export const handleLocation = (location) => {
    console.log('handleLocation: ', location )
}

const validateNumber = (number: number) => {
    let isValid: boolean = false;

    return isValid
}

export const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}