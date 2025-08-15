import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Data_Fetching from './Components/Data_Fetching.jsx'
import Countedown_Timer from './Components/Countedown_Timer.jsx'
// import Trail from './Components/Trail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Countedown_Timer />
  </StrictMode>,
)
