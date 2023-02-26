import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { IoIosMore } from 'react-icons/io';
import { GoPrimitiveDot } from 'react-icons/go';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, SparkLine, LineChart  } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';   
import product9 from '../data/product9.jpg';

const DropDown = ({ currentMode }) => (
  <div className='w-28 border-1 border-color px-2 py-1 rounded-md'>
    <DropDownListComponent
      id='time'
      fields={{ text: 'Time', value: 'Id' }}
      style={{ border:'none', color:(currentMode === 'Dark') && 'white'}}
      value='1'
      dataSource={dropdownData}
      popupHeight='220px'
      popupWidth='120px' 
    />
  </div>
);

const ECommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className='mt-24'>
      <div className='flex  flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'> Earning </p>
              <p className='text-2xl'> $35,500.00 </p>
            </div>
            <button
              type='button'
              style={{ backgroundColor: currentColor }}
              className='text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4'
            >
              <BsCurrencyDollar />
            </button>  
          </div>
          <div className='mt-6'>
            <Button
             color='white'
             bgColor={currentColor}
             text='Descargar'
             borderRadius='10px'
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item)=>(
            <div 
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
              >
                { item.icon }
              </button>
              <p className='mt-3'>
                <span className=' text-lg font-semibold'>{ item.amount} </span>              
                <span className={`text-sm text-${item.pcColor} ml-2`}>{ item.percentage} </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl '>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className='mt-10 flex gap flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93.438</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Budget
                </p>
              </div>
              <div className='mt-8'>
                <p><span className='text-3xl font-semibold'>$48.438</span></p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine
                  currentColor={currentColor}
                  id='line-sparkLine'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color={currentColor}             
                />
              </div>
              <div className='mt-10'>
                <Button
                  color='white'
                  bgColor={currentColor}
                  text='Descargar Informe'
                  borderRadius='10px'
                />
              </div>
            </div>
            <div>
              <Stacked width='320px' height='360px'/>
            </div>
          </div>
        </div>
        <div>
          <div className='rounded-2xl md:w-400 p-4 m-3' style={{ backgroundColor: currentColor}}>
            <div className='flex justify-between items-center'>
              <p className='font-semibold text-white text-2xl'> Ahorro </p>
              <div>
                <p className='font-semibold text-white text-2xl mt-8'> $63.448,78 </p>
                <p className='text-gray-200 '> Ingreso mensual </p>
              </div>
            </div>
            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>  
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Ventas anuales</p>
            </div>

            <div className="w-40">
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-10 m-4 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl'>
          <div className='flex justify-between items-center gap-2 '>
            <p className='text-xl font-semibold'> Últimas transacciones</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className='mt-10 w-72 md:w-400'>
            {recentTransactions.map((item) => (
              <div key={item.title} className='flex justify-between mt-4'>
                <div className='flex gap-4'>
                  <button
                    type='button'
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className='text-2xl rounded-lg p-4 hover:drop-shadow-xl'
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className='text-md font-semibold'>{item.title}</p>
                    <p className='text-gray-400 text-sm'>{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
            <div className='mt-4'>
              <SparkLine
                currentColor={currentColor}
                id='area-sparkLine'
                type='Area'
                height='160px'
                width='320'
                data={SparklineAreaData}
                color="rgb(242, 252, 253)"            
              />
            </div>
          </div>
        </div>
        <div className='w-400 bg-white dark:bg-secondary-dark-bg dark:text-gray-200 rounded-2xl p-6 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'> MedicalPro Branding </p>
            <button type='button' className='text-xl font-semibold text-gray-400'>
              <IoIosMore />
            </button>
          </div>
          <p className='text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10'>
            16 Abril, 2021
          </p>

          <div className='flex gap-4 border-b-1 border-color mt-6'>
            {medicalproBranding.data.map((item) => (
              <div key={item.title} className='border-r-1 border-color pr-4 pb-2'>
                  <p className='text-xs text-gray-400'>{item.title}</p>
                  <p className='text-sm'>{item.desc}</p>
              </div>
              ))}
          </div>
          <div className='border-b-1 border-color pb-4 mt-2'>
            <p className='text-md font-semibold mb-2'> Equipos </p>
            <div className='flex gap-4'>
              {medicalproBranding.teams.map((item) => (
                <p key={item.name} style={{ background: item.color }} className='text-xs text-white cursor-pointer hover:drop-shadow-xl py-0.5 px-3 rounded-lg'> {item.name} </p>
              ))}
            </div>            
          </div>
          <div className='mt-2'>
            <p className='text-md font-semibold mb-2'> Líderes </p>
            <div className='flex gap-4'>
              {medicalproBranding.leaders.map((item, index) => (
                <img key={index} src={item.image} alt="" className='rounded-full w-8 h-8' />
              ))}
            </div>
          </div>
          <div className='flex  justify-between items-center mt-5 border-t-1 border-color'>
            <div className='mt-3'>
              <Button 
                color='white'
                bgColor={currentColor}
                text='Agregar'
                borderRadius='10px'
              />
            </div>
            <p className='text-gray-400 text-sm'>Últimas 36 transacciones</p>
          </div>
        </div>
        <div className='w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3'>
          <div className='flex-justify-between'>
            <p className='text-xl font-semibold '> Actividades Diarias</p>
            <button type='button' className='text-xl font-semibold text-gray-500'>
              <IoIosMore />
            </button>
          </div>
          <div className='mt-10'>
            <img className='md:w-96 h-50 'src={product9} alt="" />
            <div className='mt-8'>
              <p className="font-semibold text-lg">React 18 coming soon!</p>
              <p className="text-gray-400 ">By Johnathan Doe</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Read More"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ECommerce