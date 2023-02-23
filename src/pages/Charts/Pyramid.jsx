import React from 'react'

import {AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection} from '@syncfusion/ej2-react-charts' 

import { PyramidData } from '../../data/dummy'
import { useStateContext } from '../../context/ContextProvider'
import { ChartsHeader } from '../../components'


const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className=' m-4 md:m-10 mt:24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl '>
      <ChartsHeader category='Pyramid' title="Diagrama de Comparación de alimentos" />
      <div className='w-full'>
        <AccumulationChartComponent 
          id='pyramid-chart'
          legendSettings={{ background: 'white'}}
          tooltip={{ enable: true}}
          background={ currentMode === 'Dark'? '#33373E' : 'white'}
        >
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]}/>
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name='Food'
              dataSource={PyramidData}
              xName='x'
              yName='y'
              type='Pyramid'
              width='45%'
              height='80%'
              neckWidth='15%'
              gapRatio={0.03}
              explode
              emptyPointSettings={{ fill: 'red', mode: 'Drop' }}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text'
              }}
            >
              <PyramidData/>
            </AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
          
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;