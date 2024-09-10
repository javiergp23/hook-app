import { createRoot } from 'react-dom/client'
// import { StrictMode } from 'react'
import { HooksApp } from "./assets/HooksApp"
import './assets/index.css'
// import { CounterApp } from './01-usState/CounterApp'
// import { CounterCustomHook } from './01-usState/CounterCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'

createRoot(document.getElementById('root')).render(
  <>
  {/* // <StrictMode> */}
    {/* <HooksApp /> */}
    {/* <CounterApp/> */}
    {/* <CounterCustomHook/> */}
    <SimpleForm/>
  {/* </StrictMode>, */}
  </>
)
