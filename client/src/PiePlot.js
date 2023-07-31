import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import './graph.css';

class PiePlot extends React.Component {
    render() {
      return (
        <div className="custom-pie-container"> 
          <Plot
          className="custom-pie"
          data={[
            {
            values: [55, 26, 19],
            labels: ['Essentials', 'Non-Essentials', 'Savings'],
            type: 'pie',
              
            },
          ]}
        layout={ {title: 'Actual', width: 500} }
          />
          </div>
      );
    }
};

export default PiePlot;

