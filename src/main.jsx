import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Nyheder } from './nyheder';
import { Menu } from './ugensmenu';
import { Vejr } from './vejr';
import { ClassSchedule } from './aktiv';
import './index.css'
import { BusSchedule } from './bustider';
import { Time } from './time';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Time/>
  <Vejr />
  <BusSchedule/>
  <ClassSchedule />
  <Menu className="bg-blue-500"/>
  <Nyheder />
  </StrictMode>,
)
