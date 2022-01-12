let radio = ['CDMA', 'GSM', 'LTE', 'UMTS']

// Loop through the array of books
for (let i = 0; i < html_results.length; i++) {

    // Store the book at index `i` for evaluation
    row = html_results[i];

    // Compare `rating` value to `rating` provided as argument
    if (row.radio == radio) {

        // Increment by one
        count += 1
    }
}

let trace1 = {
    x: radio,
    y: [1,2,3,4],
    type: "bar"
}

let data = [trace1]

// Pass metric to chart title
let layout = {
    title: "test"
};

Plotly.newPlot("plot", data, layout);
