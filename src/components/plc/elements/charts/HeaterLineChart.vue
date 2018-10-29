<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'labels'],
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: this.data,
          yAxisID: 'Temp',
          xAxisID: 'Time'
        }
      ]}, {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Temperature'
          },
          id: 'Temp',
          ticks: {
            min: 0,
            max: 100,
            stepSize: 10
          }
        }],
        xAxes: [{
          id: 'Time',
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Time'
          },
          ticks: {
            min: 0,
            max: 600,
            stepSize: 10
          }
        }]
      }
    })
  }
}
</script>
