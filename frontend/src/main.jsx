import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PhoneProvider from './context/PhoneContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhoneProvider>
       <App />
    </PhoneProvider>   
  </React.StrictMode>,
)
