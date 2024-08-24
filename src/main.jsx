import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CarritoApp from './CarritoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarritoApp />
  </StrictMode>,
)
