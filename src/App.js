import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

//import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
//import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';


import './App.css';

const App = () => {
  const activeMenu = true;

  return (
    <div>
      <BrowserRouter >
        <div className="flex-relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style = {{ zIndex: '1000'}} >
            <TooltipComponent content= "Settings" position='Top'>
              <button type='button'
                      className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                      style={{ 
                        background: 'blue',
                        borderRadius: '50%' 
                      }}        >
                <FiSettings />
              </button>
            </TooltipComponent>

          </div>
          {activeMenu? (
            <div className='w-72 fixed sidebar dark:bg-secundary-dark-bg bg-white '> 
              SideBar true
            </div>
          ):(
            <div className='w-0 dark:bg-secundary-dark-bg'>
              SideBar false
            </div>
          )}
          <div className={
            `dark:bg-main-bg  bg-main-bg min-h-screen w-full ${activeMenu ?  'md:ml-72': 'flex-2'}`
          }>
            <div className='fixed md:static bg-main-bg dark: bg-main-dark-bg navbar w-full'>
              Navbar
            </div>
          </div>

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element = 'Comercio'/>
              <Route path='/ecommerce' element = 'Comercio Electrónico'/>

              {/* Pages */}
              <Route path='/orders' element = 'Órdenes de Compra'/>
              <Route path='/employees' element = 'Empleados'/>
              <Route path='/customers' element = 'Clientes'/>

              {/* Apps */}
              <Route path='/kanban' element = 'Gestión de Proyectos'/>
              <Route path='/editor' element = 'Editor de texto'/>
              <Route path='/calendar' element = 'Calendario'/>
              <Route path='/color-picker' element = 'Selector de color'/>
              
              {/* Charts */}
              <Route path='/line' element = 'Diagrama de lineas'/>
              <Route path='/area' element = 'Área'/>
              <Route path='/bar' element = 'Diagrama de barras'/>
              <Route path='/pie' element = 'Diagrama de torta'/>
              <Route path='/financial' element = 'Graficos financieros'/>
              <Route path='/color-mapping' element = 'Color Mapping'/>
              <Route path='/pyramid' element = 'Gráfico de pirámide'/>
              <Route path='/stacked' element = 'Stacked'/>

            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </div>

  )
}

export default App