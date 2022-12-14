import { handleTotal, handleE1RM } from "./functions";

export const STONE_WEIGHTS = [
    {
        'front': 415,
        'back': 319,
        'total': 734
    },
    {
        'front': 405,
        'back': 311,
        'total': 716
    },
    {
        'front': 395,
        'back': 304,
        'total': 699
    },
    {
        'front': 385,
        'back': 296,
        'total': 681
    },
    {
        'front': 375,
        'back': 288,
        'total': 663
    },
    {
        'front': 365,
        'back': 281,
        'total': 646
    },
    {
        'front': 355,
        'back': 273,
        'total': 628
    },
    {
        'front': 345,
        'back': 265,
        'total': 610
    },
    {
        'front': 335,
        'back': 258,
        'total': 593
    },
    {
        'front': 325,
        'back': 250,
        'total': 575
    },
    {
        'front': 315,
        'back': 242,
        'total': 557
    },
    {
        'front': 305,
        'back': 234,
        'total': 539
    },
    {
        'front': 295,
        'back': 227,
        'total': 522
    },
    {
        'front': 285,
        'back': 219,
        'total': 504
    },
    {
        'front': 275,
        'back': 211,
        'total': 486
    },
    {
        'front': 265,
        'back': 204,
        'total': 469
    },
    {
        'front': 255,
        'back': 196,
        'total': 451
    },
    {
        'front': 245,
        'back': 188,
        'total': 433
    },
    {
        'front': 235,
        'back': 181,
        'total': 416
    },
    {
        'front': 225,
        'back': 173,
        'total': 398
    },
    {
        'front': 215,
        'back': 165,
        'total': 380
    },
    {
        'front': 205,
        'back': 158,
        'total': 363
    },
    {
        'front': 195,
        'back': 150,
        'total': 345
    },
    {
        'front': 185,
        'back': 142,
        'total': 327
    },
    {
        'front': 175,
        'back': 135,
        'total': 310
    },
    {
        'front': 165,
        'back': 127,
        'total': 292
    },
    {
        'front': 155,
        'back': 119,
        'total': 274
    },
    {
        'front': 145,
        'back': 111,
        'total': 256
    },
    {
        'front': 135,
        'back': 104,
        'total': 239
    },
    {
        'front': 125,
        'back': 96,
        'total': 221
    },
    {
        'front': 115,
        'back': 88,
        'total': 203
    },
    {
        'front': 105,
        'back': 81,
        'total': 186
    },
    {
        'front': 95,
        'back': 73,
        'total': 168
    },
    {
        'front': 85,
        'back': 65,
        'total': 150
    },
    {
        'front': 75,
        'back': 58,
        'total': 133
    },
    {
        'front': 65,
        'back': 50,
        'total': 115
    },
    {
        'front': 55,
        'back': 42,
        'total': 97
    },
    {
        'front': 45,
        'back': 35,
        'total': 80
    },
]


const download = function (data: any) {
 
    // Creating a Blob for having a csv file format
    // and passing the data with type
    const blob = new Blob([data], { type: 'text/csv' });
 
    // Creating an object for downloading url
    const url = window.URL.createObjectURL(blob)
 
    // Creating an anchor(a) tag of HTML
    const a = document.createElement('a')
 
    // Passing the blob downloading url
    a.setAttribute('href', url)
 
    // Setting the anchor tag attribute for downloading
    // and passing the download file name
    a.setAttribute('download', 'dinnie-tracker-lifts.csv');
 
    // Performing a download with click
    a.click()
}
 
const csvmaker = function (data: any) {
 
    // Empty array for storing the values
    let csvRows = [];
 
    // Headers is basically a keys of an
    // object which is id, name, and
    // profession
    const headers = [
        'Date',
        'Front',
        'Back',
        'Total',
        'Reps',
        'E1RM',
        'Type',
        'Location',
    ];
 
    // As for making csv format, headers
    // must be separated by comma and
    // pushing it into array
    csvRows.push(headers.join(','));
 
    // Pushing Object values into array
    // with comma separation
    for( const lift of data ) {
        const liftData = [
            lift.date,
            lift.front,
            lift.back,
            handleTotal(lift.front, lift.back),
            lift.reps,
            handleE1RM(lift.front, lift.back, lift.reps),
            lift.type,
            lift.location,
        ]

        const values = liftData.join(',');
        csvRows.push(values)
    }

    // Returning the array joining with new line
    return csvRows.join('\n')
}
 
export const getLiftsCSV = async function (data: object) {
    const csvdata = csvmaker(data);
    download(csvdata);
}