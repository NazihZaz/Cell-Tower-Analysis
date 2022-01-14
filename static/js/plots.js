// Intialize an array of radio types
let radio = ['CDMA', 'GSM', 'LTE', 'UMTS']

// // Initialize the count for each type of radio
// let countCDMA = 0
// let countGSM = 0
// let countLTE = 0
// let countUMTS = 0

// // Loop through our data
// for (let i = 0; i < html_results.length; i++) {

//   row = html_results[i];

//   if (row.radio == "CDMA") {
//     countCDMA += 1
//   }
//   else if (row.radio == "GSM") {
//     countGSM += 1
//   }
//   else if (row.radio == "LTE") {
//     countLTE += 1
//   }
//   else {
//     countUMTS += 1
//   }
// }

// Create the data for our chart plot
const data = {
  labels: radio,
  datasets: [{
    label: "Count by Radio Type",
    backgroundColor: ["yellow", "blue", "red", "green"],
    borderColor: "black",
    data: [541113, 273385,3663341,1595872],
  }]
};

// Create the config for our plot
const config = {
  type: 'bar',
  data: data,
  options: {
    maintainAspectRatio: false,
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: 'none',
      },
      title: {
        display: true,
        text: "Count by Radio Type"
      }
    }
  },
};

// Plot the chart
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);