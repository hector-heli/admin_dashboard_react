import React from 'react';

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../context/ContextProvider';



const Donut = ({ id, data, legendVisibility, height }) => {
    const { currentMode } = useStateContext();

    return (
    <AccumulationChartComponent
        id={id}
        legendSettings={{ visible: legendVisibility, background: "white"}}
        height={height}
        background={ currentMode === 'Dark' ? "#3373E" : "white"}
        tooltip={{ enable: true }}
    >
        <Inject services={[ AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
        <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
                name='Sale'
                dataSource={data}
                xName='x'
                yName='y'
                innerRadius='40%'
                startAngle={0}
                endAngle={360}
                radius='70%'
                explode
                explodeOffset='0%'
                explodeIndex={2}
                dataLabel={{
                    visible: true,
                    name: 'text',
                    position: 'inside',
                    font: {
                        fontweight: '600',
                        color: 'white'
                    },
                }}
            />
        </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

    
)}

export default Donut