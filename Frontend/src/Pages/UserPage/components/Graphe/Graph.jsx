import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ data, chartType }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      renderChart();
    }
  }, [data]);

  const renderChart = () => {
    const ctx = chartRef.current.getContext('2d');
    if (ctx && data && data.length > 0) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      chartRef.current.chart = new Chart(ctx, {
        type: chartType,
        data: {
          labels: data.map(item => item.label),
          datasets: [{
            label: 'Data',
            data: data.map(item => item.value),
            backgroundColor: chartType === 'bar' ? 'rgba(75, 192, 192, 0.2)' : chartType === 'line' ? 'rgba(255, 99, 132, 0.2)' : generateRandomColors(data.length), // Set different colors for different chart types
            borderColor: chartType === 'bar' ? 'rgba(75, 192, 192, 1)' : chartType === 'line' ? 'rgba(255, 99, 132, 1)' : generateRandomColors(data.length), // Set different border colors for different chart types
            borderWidth: 1
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
  };

  const generateRandomColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`;
      colors.push(color);
    }
    return colors;
  };

  const chartContainerStyle = {
    width: '400px',
  };

  return (
    <div style={chartContainerStyle}>
      <canvas
        ref={chartRef}
      ></canvas>
    </div>
  );
};

export default Graph;
