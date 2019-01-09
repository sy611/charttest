/* eslint-disable no-undef */
/* eslint-disable semi */
$(function () {
  const ctx = $('#myChart')
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['赤', '青', '黄', '緑', '紫', '橙'],
      datasets: [{
        label: '得票数',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })

  $('#add').on('click', function () {
    console.log('add clicked')
    addData(myChart, '金', 22)
  })

  const objPattern = {
    pattern1: [1, 2, 3, 4, 5, 6],
    pattern2: [6, 5, 4, 3, 2, 1]
  }
  $('#contentSelect').on('change', function () {
    const val = $(this).val()
    console.log(objPattern[val])
  })
})

function addData (chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    console.log(dataset)
    dataset.data.push(data);
  });
  chart.update();
}

// function changeData (chart, labels, data) {
//   chart.data.labels = labels
//   chart.data.datasets.
// }
