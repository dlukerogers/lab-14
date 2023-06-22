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
  new Chart(canvasElem, {
    type: 'bar',
    data: {
      labels: labelNames,
      datasets: [{
        label: '# of Votes',
        data: numberVotes,
        borderWidth: 2,
        backgroundColor: '#0147AB',
        borderColor: '#000080'
      },
      {
        label: '# of Views',
        data: numberViews,
        borderWidth: 2,
        backgroundColor: '#A45EE9',
        borderColor: '#4B0076'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

renderChart();
