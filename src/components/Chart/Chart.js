import React from 'react';

import ChartBar from './CharBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoints => dataPoints.value);
    const totalMax = Math.max(...dataPointValue);

    return(
        <div className='chart'>
            {
             props.dataPoints.map((dataPoint) => (
                 <ChartBar
                    key = {dataPoint.label}
                    label = {dataPoint.label}
                    value = {dataPoint.value}
                    maxValue = {totalMax}
                 />
             ))   
            }
        </div>
    );
}

export default Chart;