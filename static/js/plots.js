let radio = ['CDMA', 'GSM', 'LTE', 'UMTS']
let cdma=[]
let gsm=[]
let lte=[]
let umts=[]

let countCDMA=0
let countGSM=0
let countLTE=0
let countUMTS=0

// Loop through the array of books
for (let i = 0; i < html_results.length; i++) {

    // Store the book at index `i` for evaluation
    row = html_results[i];

    // Compare `rating` value to `rating` provided as argument
    if (row.radio == "CDMA") {
        countCDMA += 1
        cdma.push(countCDMA)
    }
    else if (row.radio == "GSM") {
        countGSM += 1
        gsm.push(countGSM)
    }
    else if (row.radio == "LTE") {
        countLTE += 1
        lte.push(countLTE)
    }
    else {
        countUMTS += 1
        umts.push(countUMTS)
    }

let trace1 = {
    x: radio,
    y: [cdma.length,gsm.length,lte.length,umts.length],
    type: "bar"
}

let data = [trace1]

// Pass metric to chart title
let layout = {
    title: "test"
};

Plotly.newPlot("plot", data, layout);}
