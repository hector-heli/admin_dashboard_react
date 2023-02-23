import React from 'react'

import { ChartsHeader, Stacked as StackedChart } from '../../components';

const Stacked = () => {
  return (
    <div className= 'm-4 md:m-10 mt-24 p-10 bg-white dark:bg-secundary-dark-bg rounded-3xl'>
      <ChartsHeader category='Stacked' title='BreakDown Revenue'/>
      <StackedChart/>
    </div>
  )
}

export default Stacked