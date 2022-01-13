let radio = ['CDMA', 'GSM', 'LTE', 'UMTS']

let countCDMA = 0
let countGSM = 0
let countLTE = 0
let countUMTS = 0

// Loop through the array of books
for (let i = 0; i < html_results.length; i++) {

  // Store the book at index `i` for evaluation
  row = html_results[i];

  // Compare `rating` value to `rating` provided as argument
  if (row.radio == "CDMA") {
    countCDMA += 1
  }
  else if (row.radio == "GSM") {
    countGSM += 1
  }
  else if (row.radio == "LTE") {
    countLTE += 1
  }
  else {
    countUMTS += 1
  }

  let trace1 = {
    x: [countCDMA, countGSM, countLTE, countUMTS],
    y: radio,
    type: "bar",
    orientation: "h"
  }

  let data = [trace1]

  let configPlot = {responsive: true}

  // Pass metric to chart title
  let layout = {
    title: "Radio",
    xaxis: { title: "<b>Count</b>" },
    height: 500,
    width: 1000
  };

  Plotly.newPlot("plot", data, layout, configPlot);
}

const data = {
  labels: radio,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: ["yellow", "blue", "red", "green"],
    borderColor: "black",
    data: [countCDMA, countGSM, countLTE, countUMTS],
  }]
};

const config = {
  type: 'polarArea',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Radio'
      }
    }
  },
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

// // Group by function
// let groupBy = function(xs, key) {
//   return xs.reduce(function(rv, x) {
//     (rv[x[key]] = rv[x[key]] || []).push(x);
//     return rv;
//   }, {});
// };

// console.log(groupBy(html_results, 'range'));

// // Binning function
// var bins = d3.layout.histogram()  // create layout object
//     .bins(20)       // to use 20 bins
//     .range([1000,5000])  // to cover range from 0 to 1
//     (html_results,[html_results.range]);    
//   console.log(bins)