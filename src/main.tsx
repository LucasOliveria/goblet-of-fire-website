import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home'
import ContextComponent from './context/context'

createRoot(document.getElementById('root')!).render(
  <ContextComponent>
    <Home />
  </ContextComponent>
)
