export const handleDate = (date) => {
    console.log('handleDate: ', date )
}
const handleFront = (front) => {
    console.log('handleFront: ', front )
}
const handleBack = (back) => {
    console.log('handleBack: ', back )
}
const handleTotal = (total) => {
    console.log('handleTotal: ', total )
}
const handleReps = (reps) => {
    console.log('handleReps: ', reps )
}
const handleE1RM = (er1m) => {
    console.log('handleE1RM: ', er1m )
}
const handleLocation = (location) => {
    console.log('handleLocation: ', location )
}




const getE1RM = ( weight: number, reps: number ): number => {
    // (.0333 x Weight x Reps) + Weight = Estimated 1RM
    let e1RM: number = 0;

    return e1RM;
}

const validateNumber = (number: number) => {
    let isValid: boolean = false;

    return isValid
}

module.exports = {
    handleDate,
    handleFront,
    handleBack,
    handleTotal,
    handleReps,
    handleE1RM,
    handleLocation,
}