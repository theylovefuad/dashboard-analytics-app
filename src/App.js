import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'
import { Navbar, Footer, Sidebar, ThemeSettings } from './Components'
import {
    ECommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Line, ColorPicker,
    ColorMapping, Editor
} from './pages'
import './App.css'
import { useStateContext } from './contexts/ContextProvider'

export default function App() {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className='fixed right-4 bottom-4' style={{ zIndex: '10' }}>
                        <TooltipComponent content='Settings' position='Top'>
                            <button
                                onClick={() => setThemeSettings(true)}
                                type='button'
                                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                                style={{ background: currentColor, borderRadius: '50%' }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className={activeMenu ? 'w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white sidebar' : 'w-0 dark:bg-secondary-dark-bg sidebar'}>
                        <Sidebar />
                    </div>
                    <div className={`dark:bg-main-dark-bg other bg-main-bg min-h-screen first-letter:w-full ${activeMenu ? ' md:ml-72' : 'w-full flex-2'}`}>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        </div>
                        <div>
                            {themeSettings && <ThemeSettings className='themeSettings' />}
                            <Routes>
                                {/* Dashboard */}
                                <Route path='/' element={<ECommerce />} />
                                <Route path='/ecommerce' element={<ECommerce />} />

                                {/* Pages */}
                                <Route path='/orders' element={<Orders />} />
                                <Route path='/employees' element={<Employees />} />
                                <Route path='/customers' element={<Customers />} />

                                {/* Apps */}
                                <Route path='/kanban' element={<Kanban />} />
                                <Route path='/editor' element={<Editor />} />
                                <Route path='/calendar' element={<Calendar />} />
                                <Route path='/color-picker' element={<ColorPicker />} />

                                {/* Charts */}
                                <Route path='/line' element={<Line />} />
                                <Route path='/area' element={<Area />} />
                                <Route path='/bar' element={<Bar />} />
                                <Route path='/pie' element={<Pie />} />
                                <Route path='/financial' element={<Line />} />
                                <Route path='/color-mapping' element={<ColorMapping />} />
                                <Route path='/pyramid' element={<Pyramid />} />
                                <Route path='/stacked' element={<Stacked />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}