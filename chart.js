
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["3/22", "4/19", "5/8", "5/21", "12/5", "12/6", "1/30"],
    datasets: [{
      label: "(thousands)",
      data: [48, 52, 96, 97, 150, 151, 738],
      borderWidth: 1,
      backgroundColor: "#D41C2B"
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
