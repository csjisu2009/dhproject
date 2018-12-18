// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["인프라", "MES", "WMS", "QMS", "ERP", "DW","합계"],
    datasets: [{
      data: [1, 15, 4, 6, 0, 10, 36],
      backgroundColor: 'rgba(54, 162, 235, 1)'
    },
    {
      data: [2, 19, 9, 3, 1, 2, 36],
      backgroundColor: 'rgba(255, 206, 86, 1)'
    },
    {
      data: [0, 0, 0, 13, 2, 2, 17],
      backgroundColor: 'rgba(75, 192, 192, 1)'
    },
    {
      data: [0, 1, 1, 0, 0, 0, 2],
      backgroundColor: 'rgba(153, 102, 255, 1)'
    }]
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
