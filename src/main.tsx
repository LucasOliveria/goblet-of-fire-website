import { createRoot } from 'react-dom/client'
import ContextComponent from './context/context'
import './index.css'
import Home from './pages/home'

createRoot(document.getElementById('root')!).render(
  <ContextComponent>
    <Home />
  </ContextComponent>
)
