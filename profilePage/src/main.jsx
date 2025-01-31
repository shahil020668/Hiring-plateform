import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import ProfileContext from './context/ProfileContext.jsx'


createRoot(document.getElementById('root')).render(


  <BrowserRouter>
    <ProfileContext>
      <App />
    </ProfileContext>
  </BrowserRouter>

)
