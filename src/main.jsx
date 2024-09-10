import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { HooksApp } from "./assets/HooksApp"
import './assets/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooksApp />
  </StrictMode>,
)
