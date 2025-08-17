import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Data_Fetching from './Components/Data_Fetching.jsx'
import Countedown_Timer from './Components/Countedown_Timer.jsx'
import Window_Resize_Listener from './Components/Window_Resize_Listener.jsx'
// import Trail from './Components/Trail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Window_Resize_Listener/>
  </StrictMode>,
)
