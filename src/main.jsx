import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Nyheder } from './nyheder';
import { Menu } from './ugensmenu';
import { Vejr } from './vejr';
import { ClassSchedule } from './aktiv';
import './index.css'
import { BusSchedule } from './bustider';
import { Time } from './time';
import { Galeri } from './galeri';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className="grid grid-cols-9 grid-rows-10 gap-2 h-screen w-screen text-center text-lg font-semibold">

    {/* Top bar - Time */}
    <div className="row-start-1 row-end-2 col-start-1 col-end-10 bg-blue-600 p-4">
      <Time />
    </div>

    {/* Bottom bar - Nyheder */}
    <div className="row-start-10 row-end-11 col-start-1 col-end-10 bg-red-600 p-4">
      <Nyheder />
    </div>

    {/* Top right - Menu */}
    <div className="row-start-2 row-end-6 col-start-7 col-end-10 bg-green-600 p-4">
      <Menu />
    </div>

    {/* Bottom right - Vejr */}
    <div className="row-start-6 row-end-10 col-start-7 col-end-10 bg-yellow-500 text-black p-4">
      <Vejr />
    </div>

    {/* Top left - ClassSchedule */}
    <div className="row-start-2 row-end-6 col-start-1 col-end-4 bg-purple-600 p-4">
      <ClassSchedule />
    </div>

    {/* Bottom left - BusSchedule */}
    <div className="row-start-6 row-end-10 col-start-1 col-end-4 bg-pink-500 p-4">
      <BusSchedule />
    </div>

    {/* Center - Galeri */}
    <div className="row-start-2 row-end-10 col-start-4 col-end-7 bg-gray-700 p-4">
      <Galeri />
    </div>

  </div>
</StrictMode>


,
)
