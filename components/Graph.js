import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const randomPoints = [
  [65, 59, 100, 80, 10, 56, 70, 45, 67, 55, 42],
  [10, 50, 30, 44, 38, 90, 40, 77, 100, 0, 100],
  [0, 59, 100, 80, 10, 56, 100, 0, 26, 23, 32],
  [100, 40, 77, 100, 0, 100, 72, 45, 67, 55, 42],
  [0, 100, 47, 19, 90, 34, 25, 65, 78, 0, 32],
]

const getRandomPoints = () => {
  const randomInt = Math.floor(Math.random() * 4) + 1
  return randomPoints[randomInt]
}

const data = {
  labels: [
    '6:04 AM',
    '9:04 AM',
    '3:04 PM',
    '6:04 PM',
    '9:04 PM',
    '12:04 AM',
    '3:04 AM',
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'red',
      borderColor: '#3773f5',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#3773f5',
      pointBackgroundColor: '#3773f5',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#3773f5',
      pointHoverBorderColor: '#3773f5',
      pointRadius: 1,
      pointHitRadius: 10,
      data: getRandomPoints(),
    },
  ],
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

const Graph = () => {
  return (
    <div>
      <Line data={data} options={options} width={400} height={150} />
    </div>
  )
}

export default Graph
