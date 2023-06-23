'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
function renderChart() {
  let results = new AppState();
  results.loadItems();
  let dataObject = results.allProducts;
  let numberVotes = [];
  let numberViews = [];
  let labelNames = [];
  for (let i = 0; i < dataObject.length; i++){
    labelNames.push(dataObject[i].name);
    numberVotes.push(dataObject[i].timesClicked);
    numberViews.push(dataObject[i].timesShown);
  }
  Chart.defaults.color = "#000";
  new Chart(canvasElem, {
    type: 'bar',
    data: {
      labels: labelNames,
      datasets: [{
        label: '# of Votes',
        data: numberVotes,
        borderWidth: 2,
        backgroundColor: '#FFC3BF',
        borderColor: '#CC5279',
        hoverBackgroundColor: '#CC5279'
      },
      {
        label: '# of Views',
        data: numberViews,
        borderWidth: 2,
        backgroundColor: '#52B2CC',
        borderColor: '#0F7B99',
        hoverBackgroundColor: '#0F7B99'
      }]
    },
    options: {
      scales: {
        y: {
          ticks: {
            color: 'black',
            beginAtZero: true
          }
        },
        x: {
          ticks: {
            color: 'black',
            beginAtZero: true
          }
        }
      }
    }
  });
}

renderChart();
