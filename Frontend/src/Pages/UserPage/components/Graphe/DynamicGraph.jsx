import React, { useState } from 'react';
import Header from '../sidebar/Header';
import Graph from './Graph';
import TextField from '@mui/material/TextField'; // Import TextField component from Material-UI

function DynamicGraph() {
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');
  const [date, setDate] = useState('');

  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Split x and y axes into arrays
    const xAxisArray = xAxis.split(',').map(item => item.trim());
    const yAxisArray = yAxis.split(',').map(item => parseInt(item.trim()));

    // Construct data array from entered x and y axes
    const newData = xAxisArray.map((item, index) => ({
      label: item,
      value: yAxisArray[index] || 0 // Use y-axis value, or default to 0 if not provided
    }));

    // Update the state with the entered data
    setData(newData);
  };

  const handlePrint = () => {
    // Logic to print the result
    // You can customize this function according to your requirements
    window.print();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <span style={{ marginRight: '10px' }}>
              Saisissez les données séparées par des virgules ","
            </span>
          </div>

          <TextField
            label="Axe de X"
            type="text"
            value={xAxis}
            onChange={(e) => setXAxis(e.target.value)}
            variant="outlined"
            fullWidth
            style={{
              marginTop: 1,
              padding: '5px',
              borderRadius: '5px',
              fontSize: '16px',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
            }}
            multiline // Allow multiple lines
            rows={4} // Adjust the number of rows
          />
          <TextField
            label="Axe de Y"
            type="text"
            value={yAxis}
            onChange={(e) => setYAxis(e.target.value)}
            variant="outlined"
            fullWidth
            style={{
              marginTop: 4,
              padding: '5px',
              borderRadius: '5px',
              fontSize: '16px',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
            }}
            multiline // Allow multiple lines
            rows={4} // Adjust the number of rows
          />
          <TextField
            type="date" // Change type to date
            value={date}
            onChange={(e) => setDate(e.target.value)}
            variant="outlined"
            fullWidth
            style={{
              marginTop: 1,
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
              width: '100%', // Adjust width to 100%
            }}
          />
          <button
            type="submit"
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#4CAF50', // Green color
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontFamily: 'inherit',
            }}
          >
            Fetch Graph
          </button>

          <button
            onClick={handlePrint}
            style={{
              marginTop: '10px',
              marginLeft: '10px',
              padding: '10px 20px',
              backgroundColor: '#008CBA', // Blue color
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontFamily: 'inherit',
            }}
          >
            Print Result
          </button>
        </form>
      </div>
      <div style={{ marginTop: '20px' }}>
        {data.length === 0 && <p>Enter data to generate the graph</p>}
        <h3>{date}</h3>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <div style={{ width: '45%' }}>
            <h3>Bar Graph</h3>
            <Graph data={data} chartType="bar" />
          </div>
          <div style={{ width: '45%' }}>
            <h3>Line Graph</h3>
            <Graph data={data} chartType="line" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicGraph;
