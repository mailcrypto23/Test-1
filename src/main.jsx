import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import './theme-dark.css'
import './theme-light.css'

createRoot(document.getElementById('root')).render(<App />)
