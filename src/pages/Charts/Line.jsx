import { Page } from '@syncfusion/ej2/documenteditor';
import React from 'react'

import { Header, LineChart } from '../../components';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'

const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Taza de inflación'/>
      <LineChart/>
    </div>
  )
}

export default Line