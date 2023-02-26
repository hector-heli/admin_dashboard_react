import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';

const Notification = () => {
  const { currentColor } = useStateContext();

  return (
    <div className='nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 '>
      <div className='flex justify-between items center'>
        <div className='flex gap-3 dark:text-white'>
          <p>notificaciones</p>
          <button type='button' className='text-white text-xs rounded p-1 px-2 bg-orange-500'>
            5 nuevos
          </button>         
        </div>  
        <Button
            icon={ <MdOutlineCancel/> }
            color='rgb(153, 171, 180)'
            bgHoverColor='light-gray'
            size='2xl'
            borderRadius='50%' 
            backgroundColor={currentColor}
        />          
      </div> 
      <div>
        {chatData?.map((item, index) => (
          <div key={index} className='flex items-center leading-8 gap-5 border-b-1 border-color p-3'>
            <img className='rounded-full h-10 w-10' src={ item.image } alt={ item.message } />
            <p className='text-lg font-semibold dark:text-gray-200'>{item.message}</p>
            <p className='text-gray-500  text-sm dark:text-gray-400'>{item.desc}</p>
          </div>
        ))}
      </div>    
    </div>
  )
}

export default Notification;