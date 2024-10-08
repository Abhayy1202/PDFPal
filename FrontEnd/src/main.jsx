import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import getAnalytics from './AnalyticReport.js';


createRoot(document.getElementById('root')).render(
    <App />
  
)
getAnalytics();
