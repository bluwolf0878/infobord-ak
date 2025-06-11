import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Busser } from "./bustider";
import { Nyheder } from './nyheder';
import { Menu } from './ugensmenu';
import { Vejr } from './vejr';
import { Aktiv } from './aktiv';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
    <Vejr />
    <Nyheder />
    <Aktiv />
    <Busser />
  </StrictMode>,
)
